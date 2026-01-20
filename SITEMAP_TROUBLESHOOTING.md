# Sitemap Troubleshooting Guide

## Issue: Google Search Console "Not Able to Fetch"

If Google Search Console shows "Couldn't fetch" or "Not able to fetch" for your sitemap, follow these steps:

### 1. Verify Sitemap is Accessible

**Test the sitemap URL directly in your browser:**
- Go to: `https://your-actual-domain.com/sitemap.xml`
- You should see the XML content, not a 404 error

**If you get a 404:**
- Ensure the site is deployed
- Check that `public/sitemap.xml` exists in your build
- Verify your hosting platform serves static files correctly

### 2. Check Domain Configuration

**Current sitemap uses:** `https://reveratechnexus.com`

**If your actual domain is different:**
1. Update `public/sitemap.xml` - Replace all instances of `reveratechnexus.com` with your actual domain
2. Update `public/robots.txt` - Update the sitemap URL
3. Update `index.html` - Update the sitemap link
4. Rebuild and redeploy

### 3. Verify Sitemap Format

**The sitemap must:**
- Start with `<?xml version="1.0" encoding="UTF-8"?>`
- Use proper XML structure
- Have valid URLs (all must use the same domain)
- Be accessible without authentication
- Return proper Content-Type: `application/xml` or `text/xml`

### 4. Test Sitemap Validity

**Use these tools to validate:**
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google's Sitemap Tester](https://www.google.com/webmasters/tools/sitemap-list)

### 5. Common Issues and Solutions

#### Issue: Sitemap returns 404
**Solution:** 
- Ensure `public/sitemap.xml` is included in your build
- Check your hosting platform's static file serving configuration
- For Vite: Files in `public/` are served at root, so `/sitemap.xml` should work

#### Issue: Wrong domain in sitemap
**Solution:**
- Search and replace all URLs in `public/sitemap.xml`
- Update robots.txt
- Update index.html

#### Issue: Sitemap not accessible after deployment
**Solution:**
- Check if your hosting platform requires special configuration for XML files
- Some platforms need `.htaccess` or `_redirects` file
- Verify the file is actually in the deployed build

#### Issue: CORS or Access Denied
**Solution:**
- Ensure sitemap is publicly accessible (no authentication required)
- Check server headers allow access
- Verify robots.txt doesn't block the sitemap

### 6. Deployment Checklist

Before submitting to Google Search Console:

- [ ] Site is deployed and live
- [ ] Sitemap is accessible at `https://your-domain.com/sitemap.xml`
- [ ] All URLs in sitemap use correct domain
- [ ] Sitemap validates without errors
- [ ] robots.txt references correct sitemap URL
- [ ] HTML head includes sitemap link (optional but helpful)

### 7. Testing Locally

**To test sitemap locally:**
1. Run `npm run build`
2. Run `npm run preview`
3. Visit `http://localhost:4173/sitemap.xml`
4. Verify it loads correctly

### 8. Submit to Google Search Console

**After fixing issues:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to **Sitemaps** section
4. Enter: `sitemap.xml` (just the filename, not full URL)
5. Click **Submit**
6. Wait 24-48 hours for processing

### 9. Verify Submission

**Check status:**
- Green checkmark = Success
- Yellow warning = Partial success (some URLs couldn't be indexed)
- Red error = Failed (check error message for details)

### 10. Still Having Issues?

**Additional checks:**
- Verify your site is indexed (search `site:your-domain.com` in Google)
- Check Google Search Console for crawl errors
- Ensure your site isn't blocked by robots.txt
- Verify SSL certificate is valid
- Check server response times (should be < 2 seconds)
