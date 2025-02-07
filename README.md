# Arturia.com Reproduction (for fun & learning)

🔗 **Live version:**  [arturia-repro.ameliart.fr](https://arturia-repro.ameliart.fr/)  

🎨 **Figma:** [Figma prototype](https://www.figma.com/proto/WgNl9ZDDdzyzK45q0zYLcF/Arturia?page-id=1%3A3&node-id=1-1251&viewport=299%2C318%2C0.22&t=fXFDK9mZELT6NZqW-1&scaling=scale-down-width&content-scaling=fixed)  

💅 **Storybook** [arturia-storybook.ameliart.fr](https://arturia-storybook.ameliart.fr)

As part of a stage 2 interview with Arturia for a Web Integrator position, I decided to take on the challenge of roughly reproducing their website.  

⚠️ **Disclaimer:** I know this isn't perfect or even good, far from it! I put this together in **less than 24 hours** with zero prior experience in this stack. The goal was just to explore and get a feel for the tech Arturia uses.  

### Tech Stack Used:
- Vue 3  
- Nuxt  
- SCSS  
- Bootstrap  
- TypeScript  
- Storybook

### My Usual Stack:
- React  
- Vite  
- CSS-in-JS (tss-react)  
- TypeScript  
- React Router (actually type-route)
- MUI  
- Storybook

I was able to transfer some of my knowledge, but there's still a lot to learn. So yeah, **don't judge too harshly**—this was just me experimenting 🥹

## Data

The actual Arturia website is powered by a GraphQL API. Here the data are hardcoded in a big JavaScript object
and manipulated synchronously.  

---

## 🛠 How to Run It

```bash
git clone https://github.com/ameliapham/arturia-entretien
cd arturia-entretien
bun install
bun dev
```

## 💅 Run Storybook

```bash
bun run storybook
```

That's it! 🚀  