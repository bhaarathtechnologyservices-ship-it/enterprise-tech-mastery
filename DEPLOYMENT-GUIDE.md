# DEPLOYMENT GUIDE — Enterprise Tech Mastery on GitHub Pages

## Step-by-Step (15 minutes total)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Make sure you're logged in as **nbharathtrainer@gmail.com**
3. Repository name: `linux-enterprise-mastery`
4. Keep it **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click **Create repository**

### Step 2: Upload Files
1. In your new repo, click **"Add file"** → **"Upload files"**
2. Upload these 3 files:
   - `index.html` (your landing/sales page)
   - `simulator.html` (the comprehensive exam simulator app)
   - `README.md` (repo description)
3. Click **"Commit changes"**

### Step 3: Enable GitHub Pages
1. Go to repo **Settings** (gear icon, top right)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Step 4: Your Site is Live!
Your URLs will be:
- Landing page: **https://nbharathtrainer.github.io/linux-enterprise-mastery/**
- Simulator: **https://nbharathtrainer.github.io/linux-enterprise-mastery/simulator.html**

### Step 5: Connect to Custom Domain (Optional)
If you buy a domain like `enterprisetechmastery.com`:
1. In repo Settings → Pages → Custom domain, enter your domain
2. Add these DNS records at your domain registrar:
   - A record: 185.199.108.153
   - A record: 185.199.109.153
   - A record: 185.199.110.153
   - A record: 185.199.111.153
   - CNAME: www → nbharathtrainer.github.io
3. Check "Enforce HTTPS"

---

## How the Payment Flow Works

1. Visitor lands on `index.html` (landing page)
2. Clicks any "Get Access" button → goes to your Razorpay payment page:
   https://pages.razorpay.com/pl_SQROgucJkpkxt5/view
3. After payment, you manually send them the simulator link via email/WhatsApp
4. Simulator link: https://nbharathtrainer.github.io/aiio-mastery/simulator.html

### To Automate Access (Future Enhancement):
- Option A: Set up Razorpay webhook to auto-email the simulator link
- Option B: Use Razorpay button with redirect URL to simulator page
- Option C: Password-protect simulator.html (needs backend)

---

## Marketing Checklist

### LinkedIn Post Template:
"I just launched something for everyone who's been asking me about NVIDIA AIIO certification prep. 🎯

After passing the NCA-AIIO exam myself, I built a gamified exam simulator with 170+ questions across all 3 domains.

✅ Full exam simulation (50Q, 60 min timer)
✅ Domain-wise tracking (Infra 40%, AI 38%, Ops 22%)
✅ Detailed explanations for every question
✅ XP, levels, badges — makes studying actually fun

Launch price: ₹999 (₹2,999 after launch)

Link: [your URL]

#NVIDIA #AIIO #Certification #GPUComputing #AIInfrastructure"

### Share In:
- LinkedIn (post + stories)
- WhatsApp groups where people asked about AIIO
- Telegram tech groups
- Reddit r/nvidia, r/devops, r/certification
- Twitter/X with NVIDIA hashtags
