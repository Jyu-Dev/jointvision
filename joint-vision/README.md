# Joint Vision — Social Media Management Portfolio

> Personal portfolio website for **Junly Viña** (Joint Vision brand).  
> Built with pure HTML, CSS, and Vanilla JS — no build tools required.

---

## 📁 Project Structure

```
joint-vision/
├── index.html          ← Main page
├── css/
│   └── style.css       ← All styles (CSS variables, responsive)
├── js/
│   └── main.js         ← Slider, nav, form validation, animations
├── images/
│   ├── logo.png        ← Primary logo (PNG — used on site)
│   └── logo.jpg        ← Logo backup (JPG)
└── README.md           ← This file
```

---

## 🚀 How to Host for Free on GitHub Pages

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **+** button → **New repository**
2. Name it: `joint-vision` (or `yourusername.github.io` for a root domain)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
**Option A — GitHub Web Interface (easiest):**
1. Open your new repo
2. Click **Add file → Upload files**
3. Drag and drop all project files/folders
4. Click **Commit changes**

**Option B — Git CLI:**
```bash
cd joint-vision
git init
git add .
git commit -m "Initial commit — Joint Vision portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/joint-vision.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose `main` branch → `/ (root)` folder
4. Click **Save**

Your site will be live at:  
`https://YOUR_USERNAME.github.io/joint-vision/`

*(It may take 1–5 minutes to deploy)*

---

## 🖼 Adding Your Own Images

### About Section Slider (4 slides)
Replace the placeholder slides in `index.html` with real `<img>` tags:

```html
<div class="slide active">
  <img src="images/about-1.jpg" alt="Junly Viña" style="width:100%; height:100%; object-fit:cover;" />
</div>
```

Recommended image size: **800 × 1000 px** (portrait ratio 4:5)

### Portfolio & Services
Replace the placeholder `<div class="service-placeholder">` / `<div class="portfolio-placeholder">` blocks with real images or screenshots when ready.

---

## 📬 Connecting the Contact Form

The form currently **simulates** a submission (no real email sent).  
To make it work, you have a few options:

### Option A — Formspree (Free, No Backend Needed) ⭐ Recommended
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — you'll get an endpoint like:  
   `https://formspree.io/f/YOUR_FORM_ID`
3. In `index.html`, update the `<form>` tag:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. In `js/main.js`, replace `simulateSend()` with a real `fetch()`:
   ```javascript
   const response = await fetch(form.action, {
     method: 'POST',
     body: new FormData(form),
     headers: { 'Accept': 'application/json' }
   });
   if (!response.ok) throw new Error('Failed');
   ```

### Option B — EmailJS (No backend, free tier)
See [emailjs.com](https://www.emailjs.com) for setup.

### Option C — Backend (Node.js / PHP)
If you move to a paid host in the future, you can add a server-side form handler.

---

## 🔒 Security Notes

- **No sensitive data** is stored in this repo — keep API keys/passwords out of GitHub
- **Formspree** handles spam filtering and reCAPTCHA on their end
- For future upgrades: add **Cloudflare** (free) in front of your domain for DDoS protection
- If you add a custom domain, enable **HTTPS** in GitHub Pages settings (it's free via Let's Encrypt)

---

## 🛠 Updating Social Links & Email

Search for `href="#"` in `index.html` and replace with your real URLs:

```html
<!-- Facebook -->
<a href="https://facebook.com/yourpage" ...>

<!-- Instagram -->
<a href="https://instagram.com/yourhandle" ...>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" ...>

<!-- TikTok -->
<a href="https://tiktok.com/@yourhandle" ...>

<!-- Email -->
<a href="mailto:your@email.com">your@email.com</a>
```

---

## 🎨 Color Reference

| Name | Hex |
|---|---|
| Onyx Black | `#0D0D0D` |
| Prestige Gold | `#C9A84C` |
| Champagne | `#E8D5A3` |
| Ivory | `#F5F0E8` |
| Midnight Navy | `#1A1A2E` |
| Charcoal | `#2C2C2C` |

---

© 2025 Joint Vision by Junly Viña
