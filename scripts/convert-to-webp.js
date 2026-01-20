import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const publicDir = path.join(__dirname, '../public');

// Function to convert a single image
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

// Function to process directory
async function processDirectory(dir, relativePath = '') {
  const files = fs.readdirSync(dir);
  let converted = 0;
  let failed = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const result = await processDirectory(filePath, path.join(relativePath, file));
      converted += result.converted;
      failed += result.failed;
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const baseName = path.basename(file, ext);
        const outputPath = path.join(dir, `${baseName}.webp`);
        
        // Skip if webp already exists
        if (fs.existsSync(outputPath)) {
          console.log(`⊘ Skipped (already exists): ${file}`);
          continue;
        }

        const success = await convertToWebP(filePath, outputPath);
        if (success) {
          converted++;
        } else {
          failed++;
        }
      }
    }
  }

  return { converted, failed };
}

// Main execution
async function main() {
  console.log('Starting image conversion to WebP...\n');

  // Process src/assets
  console.log('Processing src/assets...');
  const assetsResult = await processDirectory(assetsDir);
  
  // Process public (excluding favicon.png as it's small)
  console.log('\nProcessing public...');
  const publicFiles = fs.readdirSync(publicDir);
  let publicConverted = 0;
  let publicFailed = 0;

  for (const file of publicFiles) {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext) && file !== 'favicon.png') {
      const baseName = path.basename(file, ext);
      const outputPath = path.join(publicDir, `${baseName}.webp`);
      
      if (!fs.existsSync(outputPath)) {
        const success = await convertToWebP(filePath, outputPath);
        if (success) {
          publicConverted++;
        } else {
          publicFailed++;
        }
      }
    }
  }

  console.log('\n=== Conversion Summary ===');
  console.log(`Assets converted: ${assetsResult.converted}`);
  console.log(`Assets failed: ${assetsResult.failed}`);
  console.log(`Public converted: ${publicConverted}`);
  console.log(`Public failed: ${publicFailed}`);
  console.log(`\nTotal converted: ${assetsResult.converted + publicConverted}`);
  console.log(`Total failed: ${assetsResult.failed + publicFailed}`);
}

main().catch(console.error);
