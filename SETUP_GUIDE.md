# Sid OS Solutions - Setup & Implementation Guide

## 🎯 Website Overview

This is a cutting-edge 3D interactive website built for **Sid OS Solutions (SOS)**, specializing in:
- Ubuntu Software Installation
- Windows Software Installation
- Dual Boot Setup
- Software Issue Resolution
- Doorstep Service
- Office-based Service

## 📋 Current Contact Details

| Detail | Value |
|--------|-------|
| **Owner Name** | Sid Kumar |
| **Phone Number** | +91 98765-43210 |
| **Office Address** | 123 Tech Street, Software Lane, New Delhi - 110001 |
| **Service Hours** | 9 AM - 6 PM (Monday - Sunday) |
| **Service Type** | Doorstep & Office Available |

## 🔧 How to Update Information

### 1. Update Contact Details

**File**: `/components/ContactSection.tsx`

Find and replace:
```tsx
<h3 className="text-xl font-bold text-foreground text-center mb-2">
  Owner Name
</h3>
<p className="text-center text-foreground/70">Sid Kumar</p>
```

And:
```tsx
<p className="text-center text-foreground/70">+91 98765-43210</p>
```

And:
```tsx
<p className="text-center text-foreground/70 text-sm">
  123 Tech Street,<br />
  Software Lane,<br />
  New Delhi - 110001
</p>
```

### 2. Update Services List

**File**: `/components/3d/ServicesScene.tsx`

Each service card is defined with position, color, title, and description:
```tsx
<ServiceCard
  position={[-6, 2, 0]}
  color="#6B4CFF"
  title="Ubuntu Software"
  description="Complete Ubuntu installation and software setup"
  index={0}
/>
```

### 3. Update Business Hours & Info

**File**: `/components/ContactSection.tsx`

Update the info card:
```tsx
<p className="text-center text-sm text-accent mt-2">
  Available Mon-Sun, 9 AM - 6 PM
</p>
```

**File**: `/components/Footer.tsx`

Update footer contact:
```tsx
<p className="text-foreground/70 text-sm mb-2">📞 +91 98765-43210</p>
<p className="text-foreground/70 text-sm mb-2">📧 info@sidossolutions.com</p>
<p className="text-foreground/70 text-sm">🏢 New Delhi, India</p>
```

## 🎨 Customizing Design

### Change Primary Color

**File**: `/app/globals.css`

Replace the primary color HSL values:
```css
--primary: 270 91% 65%; /* Current: Purple */
```

Popular alternatives:
- **Blue**: `220 90% 60%`
- **Green**: `142 72% 50%`
- **Orange**: `24 95% 50%`
- **Red**: `0 84% 60%`

### Change Accent Color

**File**: `/app/globals.css`

```css
--accent: 280 92% 60%; /* Current: Magenta */
```

### Customize Background Gradient

**File**: Individual section files (e.g., `/components/FeaturesSection.tsx`)

Look for:
```tsx
className="bg-gradient-to-b from-primary/5 to-background"
```

Change gradient direction:
- `to-r`: left to right
- `to-b`: top to bottom
- `to-br`: corner gradient

## 📝 Services Information

### Current Services Offered

1. **Ubuntu Software Installation**
   - Complete system setup
   - Driver installation
   - Software configuration

2. **Windows Software Installation**
   - Windows OS setup
   - Driver updates
   - System optimization

3. **Dual Boot Installation**
   - Ubuntu + Windows
   - Seamless partition management
   - Boot loader configuration

4. **Software Fixes**
   - System troubleshooting
   - Error resolution
   - Performance optimization

5. **Doorstep Service**
   - We visit your location
   - On-site installation
   - Remote support available

6. **Office Service**
   - Visit our office
   - Full technical support
   - System upgrades

## 🚀 Deployment Instructions

### Deploy on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Sid OS Solutions 3D Website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Select GitHub repository
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add domain in Vercel Settings
   - Update DNS records
   - Enable HTTPS

### Deploy on Other Platforms

The website uses Next.js and can be deployed on:
- **Netlify**: Connect GitHub → Auto-deploy
- **AWS**: Use Amplify or EC2
- **DigitalOcean**: Use App Platform
- **Self-hosted**: `npm run build` → `npm start`

## 📱 Testing Checklist

- [ ] 3D scenes load smoothly
- [ ] Services carousel animates correctly
- [ ] Contact details display correctly
- [ ] Navigation links work
- [ ] Mobile responsiveness works
- [ ] Dark mode functions properly
- [ ] All animations are smooth
- [ ] No console errors

## 🔗 Important Files & Locations

```
/app
  ├── page.tsx (Main page - orchestrates all sections)
  ├── layout.tsx (Metadata and viewport settings)
  └── globals.css (Design tokens and colors)

/components
  ├── Header.tsx
  ├── ContactSection.tsx (UPDATE CONTACT INFO HERE)
  ├── AboutSection.tsx
  ├── FeaturesSection.tsx
  ├── CTASection.tsx
  ├── Footer.tsx
  ├── ScrollIndicator.tsx
  └── /3d
      ├── HeroScene.tsx
      ├── ServicesScene.tsx (UPDATE SERVICES HERE)
      └── AnimatedShapes.tsx
```

## 🎓 Advanced Customization

### Adding New Services

1. Go to `/components/3d/ServicesScene.tsx`
2. Add a new ServiceCard with:
   - Unique position `[x, y, z]`
   - Unique color (hex)
   - Service title
   - Service description
   - New index number

### Adding Testimonials

1. Go to `/components/CTASection.tsx`
2. Add to the `testimonials` array:
   ```tsx
   {
     text: 'Your testimonial text',
     author: 'Customer Name',
     role: 'Customer Role',
     stars: 5,
   }
   ```

### Modifying 3D Elements

1. Go to `/components/3d/HeroScene.tsx`
2. Edit `RotatingCube`, `FloatingIcon` components
3. Adjust geometry, colors, and animations

## 📞 Quick Reference

**For Customer Inquiries:**
- Phone: +91 98765-43210
- Hours: 9 AM - 6 PM (Daily)

**For Website Support:**
- Modify contact files as described above
- Test changes locally with `npm run dev`
- Deploy to production

## ✨ Features Implemented

✅ Full-screen 3D hero scene
✅ Interactive 3D service cards
✅ Smooth Framer Motion animations
✅ Responsive design for all devices
✅ Dark/Light mode support
✅ Contact information display
✅ Testimonials section
✅ CTA buttons with animations
✅ Scroll-triggered animations
✅ Professional footer
✅ SEO metadata

## 🆘 Troubleshooting

### 3D Scene Not Rendering
- Check if Three.js loaded properly
- Verify GPU acceleration enabled
- Try different browser
- Clear browser cache

### Animations Jittery
- Reduce animation complexity
- Check browser performance
- Disable browser extensions
- Use Chrome/Firefox for best results

### Layout Broken on Mobile
- Clear cache and rebuild
- Check tailwind classes
- Verify responsive breakpoints
- Test on real device

## 📞 Contact Information Summary

```
SID OS SOLUTIONS (SOS)
━━━━━━━━━━━━━━━━━━━━━━━━
Owner: Sid Kumar
Phone: +91 98765-43210
Address: 123 Tech Street, Software Lane
         New Delhi - 110001
Hours: 9 AM - 6 PM (Mon-Sun)

Services:
• Ubuntu Software Installation
• Windows Software Installation
• Dual Boot Setup
• Software Issue Resolution
• Doorstep Service
• Office Service
━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Website Created with:** Next.js 16 • React Three Fiber • Framer Motion • Tailwind CSS

Enjoy your amazing 3D experience! 🚀
