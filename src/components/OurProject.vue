<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="particlesJs"
  />
</template>
<script>
export default {
  name: "OurProject",
  data() {
    return {
      particlesJs: {
        background: {
          color: {
            value: "transparent",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "repulse",
            // },
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
            },
            grab: {
              distance: 400,
            },
            repulse: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: "#8854b4",
          },
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
            },
            value: 50,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              speed: 4,
              minimumValue: 0.3,
            },
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
#tsparticles {
}
</style>
