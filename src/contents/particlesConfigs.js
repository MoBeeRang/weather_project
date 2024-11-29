export const particlesConfigs = {
  clear: {
    particles: {
      number: { value: 50 },
      color: { value: '#ffcc00' }, // 햇빛 느낌
      shape: { type: 'circle' },
      size: { value: 2, random: true },
      move: { enable: true, speed: 1, direction: 'none' },
    }
  },
  rain: {
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "bottom",
        enable: true,
        outModes: "out",
        random: false,
        speed: 40,
        straight: true
      },
      number: { density: { enable: true, area: 1000 }, value: 100 },
      opacity: {
        value: 1
      },
      shape: {
        type: "image",
        image: {
          src: "/images/raindrop.png"
        }
      },
      size: {
        value: { min: 10, max: 15 }
      }
    }
  },
  snow: {
    particles: {
      number: { value: 200 },
      color: { value: '#ffffff' }, // 눈송이
      shape: {
            type: "image",
            image: {
              src: "/images/snowf.png"
            }
          },
      size: { value: { min: 2, max: 10 } },
      move: { enable: true, speed: 1, direction: 'bottom' },
    }
  },
  cloudy: {
    particles: {
      number: { value: 0 },
    }
  },
};