---
title: How to Implement Scroll Slide Animation Using GSAP in React.js
description: Creating smooth scroll animations enhances user experience and adds a modern touch to your web applications.
---

# {% $markdoc.frontmatter.title %}

{% callout title='Hello' %}
Creating smooth scroll animations enhances user experience and adds a modern touch to your web applications. In this blog, we will walk through how to implement a scroll-based slide animation using GSAP (GreenSock Animation Platform) in a React.js project. GSAP is a popular animation library that allows for high-performance animations and comes with powerful plugins like ScrollTrigger, which is perfect for scroll-based animations.
{% /callout %}

### Prerequisites

Before we begin, ensure you have the following prerequisites:

- Basic knowledge of React.js
- Node.js installed to create a React app
- Familiarity with JavaScript ES6 features

### Step 1: Set Up the React Project

If you haven’t set up a React project, you can easily create one using the following command:

```base
npx create-react-app gsap-scroll-animation
cd gsap-scroll-animation
```

### Step 2: Install GSAP and ScrollTrigger

To use GSAP in React, you'll need to install the GSAP library and register the ScrollTrigger plugin, which handles animations triggered by scrolling.

```base
npm install gsap
```

### Step 3: Implement Scroll Slide Animation

Now, create a new component, SlideAnimation.tsx, where we will implement the scrolling animation logic.

```base
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function SlideAnimation() {
  // Create references for the container and the individual sections
  const container = useRef<HTMLDivElement | null>(null);
  const sections = useRef<(HTMLDivElement | null)[]>([]);

  // Sample data for the animation sections
  const dataList = [
    {
      title: "Hello",
      description: "Welcome to the future",
      background: `https://www.yudiz.com/codepen/studio-r/bg-badroom.jpg`,
    },
    {
      title: "Hello",
      description: "Welcome to the future",
      background: `https://www.yudiz.com/codepen/studio-r/bg-kitchen.jpg`,
    },
    {
      title: "Hello",
      description: "Welcome to the future",
      background: `https://www.yudiz.com/codepen/studio-r/bg-living.jpg`,
    },
    {
      title: "Hello",
      description: "Welcome to the future",
      background: `https://www.yudiz.com/codepen/studio-r/bg-kitchen.jpg`,
    },
  ];

  useEffect(() => {
    // Apply GSAP animations to each section using the ScrollTrigger plugin
    sections.current.forEach((section) => {
      if (section) {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top", // Starts animation when section hits the top
            end: "bottom top", // Ends when the section's bottom hits the top
            pin: true, // Pin the section in place
            pinSpacing: false, // Prevents extra space after pinning
            markers: false, // No markers in production
          },
        });
      }
    });

    return () => {
      // Cleanup the ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="" ref={container}>
      <div className="section-wrapper">
        {dataList.map((data, index) => (
          <div
            ref={(el) => {
              if (el) {
                sections.current[index] = el;
              }
            }}
            className="box h-screen flex w-full justify-between content-center"
            style={{ backgroundImage: `url(${data.background})`, backgroundSize: "cover", backgroundPosition: "center" }}
            key={index}
          >
            <div className="w-1/3">
              <h1 className="text-4xl text-white">{data.title}</h1>
              <p className="text-white">{data.description}</p>
            </div>
            <div>
              <img src={dataList[index+1]?.background} className="w-[400px] shadow-lg object-cover h-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideAnimation;
```

### Key Points of the Code
1. Container and Section References:
    - useRef is used to reference the container and individual sections so we can interact with them directly.
    - We map through the dataList to dynamically create multiple sections.

2. ScrollTrigger Setup:
    - For each section, GSAP's ScrollTrigger plugin is used to pin the section in place as the user scrolls.
    - The start: "top top" ensures that the animation begins when the section hits the top of the viewport, while end: "bottom top" ends the animation when the section’s bottom hits the top of the viewport.

3. Background Styling:
    - We dynamically apply background images to each section using inline styles.

4. Clean Up:
    - We use the return statement inside useEffect to clean up any active scroll triggers when the component unmounts.

### Step 4: Add Styling
For the best visual experience, you should ensure the styling supports full-screen sections. Here's an example of how you can add some CSS to style the sections:
```
.section-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-size: cover;
  background-position: center;
}
```

### Step 5: Test the Scroll Animation
Finally, run your project to see the scroll-triggered slide animation in action:
```
npm start
```
You should now see smooth scroll-based animations, with each section being pinned as the user scrolls down the page, creating an immersive effect.

### Conclusion
In this guide, we’ve walked through how to create a scroll-based slide animation using GSAP in a React application. GSAP's ScrollTrigger plugin makes it easy to implement complex scroll-driven animations, improving the user experience and adding a dynamic flair to your web pages.

Feel free to expand upon this example by adding more animation effects, transitions, or varying the scroll behavior based on user interaction. GSAP and ScrollTrigger offer endless possibilities for creating unique web experiences.