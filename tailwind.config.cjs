module.exports = {
    content: ['./src/**/*/*.{astro,html,js,jsx}'],
    theme: {
        extend: {

        }
    },
    plugin: [require('@tailwindcss/line-clamp')]
}