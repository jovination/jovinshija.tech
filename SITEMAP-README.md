# Sitemap Configuration

This website includes both dynamic and static sitemap generation for optimal SEO.

## Files Created

### 1. Dynamic Sitemap API Route
- **Location**: `app/api/sitemap/route.ts`
- **Endpoint**: `https://jovinshija.tech/api/sitemap`
- **Format**: XML sitemap with proper SEO metadata
- **Features**:
  - Auto-generates current dates
  - Includes all pages and sections
  - Proper priority and change frequency settings
  - Includes pricing tiers as separate sections

### 2. Static Sitemap
- **Location**: `public/sitemap.xml`
- **Purpose**: Fallback sitemap for search engines
- **Last Updated**: 2025-01-23

### 3. Robots.txt
- **Location**: `public/robots.txt`
- **References**: Both dynamic and static sitemaps

## Included Pages & Sections

### Main Pages
- **Home** (`/`) - Priority: 1.0, Weekly updates
- **Projects** (`/projects`) - Priority: 0.9, Weekly updates
- **Pricing** (`/pricing`) - Priority: 0.9, Monthly updates
- **Services** (`/services`) - Priority: 0.8, Monthly updates
- **Contact** (`/contact`) - Priority: 0.7, Monthly updates

### Pricing Tiers (as sections)
- **Startup MVP** (`/pricing#startup-mvp`) - Tsh 8M+, 6-8 weeks
- **Custom SaaS** (`/pricing#custom-saas`) - Tsh 25M+, 12-16 weeks
- **Consultancy** (`/pricing#consultancy`) - Tsh 500K+, Flexible

### Home Page Sections
- Hero, Pricing Packages, Work, Services, Working Process, Skill Sets, Experience, Client Reviews, Contact

## Usage

### For Search Engines
Your sitemap is automatically available at:
- `https://jovinshija.tech/sitemap.xml` (static)
- `https://jovinshija.tech/api/sitemap` (dynamic)

### For Development
To regenerate the sitemap with updated content:
1. Update the `pages` array in `app/api/sitemap/route.ts`
2. Add new sections or pages as needed
3. Update priorities and change frequencies based on content importance

## SEO Benefits

- **Complete Coverage**: All pages and sections indexed
- **Proper Priorities**: Main pages get higher priority
- **Fresh Content**: Dynamic generation ensures current dates
- **Pricing Visibility**: Individual pricing tiers are discoverable
- **Search Engine Friendly**: Proper XML structure and metadata

## Maintenance

- **Static sitemap**: Update manually when adding major new pages
- **Dynamic sitemap**: Automatically stays current
- **Robots.txt**: References both sitemaps for redundancy
