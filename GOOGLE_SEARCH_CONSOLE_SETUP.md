# Google Search Console Setup Guide

## Sitemap Configuration

Your sitemap is configured and ready for Google Search Console submission.

### Sitemap Location
- **URL**: `https://reveratechnexus.com/sitemap.xml`
- **File**: `public/sitemap.xml`
- **Status**: ✅ Configured and accessible

### Sitemap Discovery Methods

The sitemap is discoverable through multiple methods:

1. **robots.txt** - Already configured
   - Location: `public/robots.txt`
   - Contains: `Sitemap: https://reveratechnexus.com/sitemap.xml`

2. **HTML Head** - Added sitemap link
   - Location: `index.html`
   - Contains: `<link rel="sitemap" type="application/xml" title="Sitemap" href="https://reveratechnexus.com/sitemap.xml" />`

3. **Direct Submission** - Submit manually in Google Search Console

### Steps to Submit to Google Search Console

1. **Verify Your Website**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property: `https://reveratechnexus.com`
   - Verify ownership using one of the provided methods

2. **Submit Sitemap**
   - After verification, go to **Sitemaps** in the left sidebar
   - Enter: `sitemap.xml`
   - Click **Submit**

3. **Monitor Status**
   - Google will process your sitemap within a few days
   - Check for any errors or warnings
   - Monitor indexed pages

### Sitemap Details

- **Total URLs**: 22 pages
- **Format**: XML Sitemap 0.9
- **Encoding**: UTF-8
- **Last Updated**: 2025-01-27
- **Update Frequency**: Varies by page type

### Important Notes

⚠️ **CRITICAL - Before Deployment:**
- **Update the domain in `public/sitemap.xml`** - Replace ALL instances of `reveratechnexus.com` with your actual domain
- **Update the domain in `public/robots.txt`** - Update the sitemap URL
- **Update the domain in `index.html`** - Update the sitemap link and all meta tags
- **Update the domain in `src/components/SEO.tsx`** - Update baseUrl variable

⚠️ **If Google Search Console shows "Not Able to Fetch":**
1. **Verify site is deployed** - The sitemap must be accessible at `https://your-domain.com/sitemap.xml`
2. **Test sitemap URL** - Open `https://your-domain.com/sitemap.xml` in browser (should show XML, not 404)
3. **Check domain matches** - All URLs in sitemap must use your actual domain
4. **See `SITEMAP_TROUBLESHOOTING.md`** for detailed troubleshooting steps

### Sitemap Validation

You can validate your sitemap using:
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- Google Search Console's built-in validator

### Maintenance

- Update `lastmod` dates when pages are significantly changed
- Add new pages to the sitemap as they are created
- Remove pages from sitemap if they are deleted
- Keep sitemap under 50,000 URLs (currently well under limit)
- Keep file size under 50MB (currently very small)
