export const tagMap = {
  h1: {
    tag: "h2",
    className:
      "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight",
  },
  h2: {
    tag: "h3",
    className:
      "text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 leading-snug",
  },
  h3: {
    tag: "h4",
    className:
      "text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3",
  },
  h4: {
    tag: "h5",
    className:
      "text-base sm:text-lg md:text-xl font-medium mt-4 mb-2",
  },
  h5: {
    tag: "h6",
    className:
      "text-sm sm:text-base md:text-lg font-medium mt-3 mb-1",
  },

  p: {
    tag: "p",
    className:
      "text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700",
  },

  text: {
    tag: "p",
    className:
      "text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700",
  },

  a: {
    tag: "a",
    className:
      "text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800 transition-colors",
    props: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },

  ul: {
    tag: "ul",
    className:
      "list-disc pl-6 space-y-2 text-sm sm:text-base md:text-lg mb-6",
  },

  ol: {
    tag: "ol",
    className:
      "list-decimal pl-6 space-y-2 text-sm sm:text-base md:text-lg mb-6",
  },

  li: {
    tag: "li",
    className:
      "leading-relaxed text-gray-700",
  },

  image: {
    tag: "img",
    className:
      "my-6 rounded-lg w-full h-auto object-cover max-h-[420px]",
  },

  link: {
    tag: "a",
    className:
      "text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800 transition-colors",
    props: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
};
