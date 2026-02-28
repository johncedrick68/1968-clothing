# 📸 How to Add Multiple Mockups & Size Chart Guide

## Overview
Your shop now supports:
- ✅ Multiple product mockups per item
- ✅ Automatic size chart for all products
- ✅ Thumbnail gallery in product preview modal
- ✅ Smooth animations and transitions

---

## 🎯 Adding Multiple Mockups to a Product

### Step 1: Prepare Your Images
Place your mockup images in the `/images` folder:
- `images/rtd-front.png` (front view)
- `images/rtd-back.png` (back view)  
- `images/rtd-detail.png` (detail/close-up)

### Step 2: Update Product Card onclick

**Single Mockup (Current):**
```html
onclick="openProductModal('Rise to Defend', 499, 'PROD-001', 'T-SHIRTS', 'images/1968 CLOTHING V1.png')"
```

**Multiple Mockups (New):**
```html
onclick="openProductModal('Rise to Defend', 499, 'PROD-001', 'T-SHIRTS', 'images/rtd-front.png', ['images/rtd-front.png', 'images/rtd-back.png', 'images/rtd-detail.png'])"
```

### Example: Complete Product Card with Multiple Mockups

```html
<div class="product-card">
  <div class="product-badge">NEW</div>
  <img src="images/1968 CLOTHING V1.png" class="product-img" alt="Rise to Defend" 
       onclick="openProductModal('Rise to Defend', 499, 'PROD-001', 'T-SHIRTS', 'images/1968 CLOTHING V1.png', ['images/1968 CLOTHING V1.png', 'images/rtd-back.png', 'images/rtd-detail.png'])">
  <div class="product-info">
    <div class="product-category">T-SHIRTS</div>
    <div class="product-name">Rise to Defend</div>
    <div class="product-price-row">
      <div class="product-price">₱499</div>
      <button class="add-to-cart-btn" onclick="addToCart(this, 'Rise to Defend', 499, 'PROD-001')">+ ADD</button>
    </div>
  </div>
</div>
```

---

## 📐 Size Chart

The size chart is **automatically included** in all product modals. Users can click "📏 VIEW SIZE CHART" to expand it.

### Current Sizes Included:
- XS to 2XL
- Measurements: Chest, Length, Shoulder (in inches)

### How to Customize Size Chart

Edit this section in your HTML (around line 1450):

```html
<table class="size-chart-table">
  <thead>
    <tr>
      <th>Size</th>
      <th>Chest (in)</th>
      <th>Length (in)</th>
      <th>Shoulder (in)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XS</td>
      <td>16"</td>
      <td>27"</td>
      <td>15"</td>
    </tr>
    <!-- Add more rows as needed -->
  </tbody>
</table>
```

---

## 💡 Tips

1. **Mockup Order Matters**: First image in the array is the default view
2. **Image Quality**: Use high-quality images (min 400x500px)
3. **Consistency**: Keep all mockups the same size for best appearance
4. **Names**: Use descriptive image names (e.g., `rtd-front.png`, `rtd-back.png`)
5. **No Limit**: Add as many mockups as needed!

---

## 🎨 Mockup Ideas

For clothing products, consider showing:
1. **Front View** - Product straight on
2. **Back View** - Show back design
3. **Detail Shot** - Close-up of logo/print
4. **Styled** - Product on model/flat lay
5. **Alt Color** - Different color variant

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check image paths in `/images` folder |
| Thumbnails overlap | They'll scroll if too many - that's fine! |
| Size chart won't toggle | Make sure you're clicking "📏 VIEW SIZE CHART" button |
| Modal doesn't open | Check console (F12) for JavaScript errors |

---

## 📝 Quick Reference

```javascript
// Syntax:
openProductModal(
  'Product Name',      // String
  499,                 // Price (number)
  'PROD-001',         // Product code
  'T-SHIRTS',         // Category
  'images/main.png',  // First/main image
  ['images/img1.png', 'images/img2.png', 'images/img3.png']  // Array of mockups (optional)
)
```

---

**Need help?** Check the HTML comments in your product section for more examples!
