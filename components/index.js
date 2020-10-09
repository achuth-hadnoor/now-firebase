import Header from './Header'
const Logo = () => (
    <svg width={83} height={30} style={{ padding: 10 }} viewBox="0 0 83 30" fill="none" >
        <path
            d="M21.242 24.133c0 .156-.008.273-.023.351a.426.426 0 00-.188.141c-.047.047-.125.063-.234.047-.031.234-.11.43-.235.586a3.424 3.424 0 01-.398.422l-.375.422a1.163 1.163 0 00-.234.585 3.84 3.84 0 00-.703.493c-.22.218-.415.367-.586.445a1.72 1.72 0 01-.399.14 4.7 4.7 0 00-.422.165c-.453.203-.922.414-1.406.633a3.452 3.452 0 01-1.477.328h-.164a.42.42 0 01-.234.117 1.843 1.843 0 01-.281.07c-.094.016-.188.04-.281.07a.42.42 0 00-.211.141 1.634 1.634 0 00-.563-.094h-.164c-.266.063-.516.11-.75.14a5.673 5.673 0 01-.75.048c-.469 0-.937-.031-1.406-.094a43.124 43.124 0 00-1.406-.164 2.719 2.719 0 01-.727-.89 2.266 2.266 0 01-.281-1.102c0-.297.062-.578.187-.844.125-.25.29-.477.492-.68h.07c.141 0 .282-.03.423-.093a1.2 1.2 0 01.445-.094c.156 0 .281.062.375.187.11.125.187.274.234.446.063.172.102.343.117.515.016.188.024.336.024.446.172.078.351.125.539.14.203.016.406.024.61.024.203 0 .43-.016.68-.047.25-.016.5-.055.75-.117.265-.047.515-.11.75-.188.25-.078.46-.18.632-.305.86-.078 1.617-.273 2.273-.585a30.72 30.72 0 002.086-1.102.733.733 0 01.188-.398c.11-.11.164-.266.164-.47a.208.208 0 00-.024-.093v-.117a7.762 7.762 0 00-.984-1.031c-.328-.297-.758-.493-1.29-.586a.58.58 0 00-.304-.305 3.89 3.89 0 00-.445-.211 12.849 12.849 0 01-.445-.188.671.671 0 01-.305-.375c-.422-.078-.86-.171-1.313-.28a2.556 2.556 0 01-1.125-.657 2.849 2.849 0 01-.726-.14c-.219-.094-.438-.18-.656-.258a4.971 4.971 0 00-.68-.235 2.283 2.283 0 00-.727-.117.68.68 0 00-.257-.258 2.084 2.084 0 00-.375-.164l-.375-.14a.68.68 0 01-.258-.258.228.228 0 00-.14.093c-.032.047-.087.07-.165.07h-.094a.282.282 0 00-.187-.187c-.094-.047-.149-.133-.164-.258a2.434 2.434 0 01-.774-.164 7.895 7.895 0 01-.633-.304 7.27 7.27 0 00-.585-.352 2.926 2.926 0 00-.68-.258 5.402 5.402 0 01-.445-.398.6.6 0 00-.493-.235 1.29 1.29 0 00-.257.047c-.032-.28-.149-.476-.352-.586a4.291 4.291 0 00-.656-.328 3.7 3.7 0 00-.633-1.078 7.574 7.574 0 00-.867-.867.745.745 0 00.047-.21c0-.157-.04-.29-.118-.4a1.265 1.265 0 00-.257-.304 6.922 6.922 0 01-.329-2.063c0-.937.211-1.804.633-2.601C1.352 7.359 2 6.75 2.891 6.344a.75.75 0 01.117-.328.622.622 0 00.14-.329c.141 0 .25-.03.329-.093.078-.063.148-.125.21-.188.079-.078.157-.148.235-.21a.596.596 0 01.305-.118 8.103 8.103 0 011.898-1.242l2.063-1.008a.763.763 0 00.351-.351h.14c.157 0 .274-.032.352-.094.094-.078.227-.102.399-.07a.452.452 0 01.234-.188c.11-.031.211-.055.305-.07.11-.032.21-.07.304-.118a.355.355 0 00.188-.21h.164c.266 0 .523-.04.773-.118.25-.093.5-.195.75-.304h.165c.312 0 .601-.055.867-.164.28-.125.578-.211.89-.258.125-.031.25-.04.375-.024s.25.024.375.024c.078 0 .172-.008.282-.024.109-.015.187-.062.234-.14h.047c.094 0 .148.031.164.094.015.062.062.093.14.093.11 0 .22-.015.329-.047a1.19 1.19 0 01.328-.046c.468 0 .93.046 1.383.14.468.094.93.18 1.382.258.032.187.11.32.235.398.14.079.289.149.445.211v.094c0 .125.031.227.094.305a.865.865 0 01-.328.492c-.157.11-.328.203-.516.281a.386.386 0 01.14.258c.016.11.024.21.024.305v.28l-.117-.022c-.25 0-.375.117-.375.351a1.677 1.677 0 00-.68-.234 5.313 5.313 0 00-.703-.047c-.312 0-.64.015-.984.047-.344.015-.68.007-1.008-.024a1.163 1.163 0 01-.469.352 1.77 1.77 0 01-.562.094c-.203 0-.399-.04-.586-.118a.822.822 0 01-.399-.398.575.575 0 00-.21-.047h-.212c-.25 0-.5.031-.75.094a7.13 7.13 0 00-.726.187c-.25.063-.5.133-.75.211a3.712 3.712 0 01-.727.117.71.71 0 01-.375.258.71.71 0 00-.375.258 2.76 2.76 0 00-.89.328c-.266.14-.524.297-.774.469l-.726.492c-.235.156-.5.29-.797.399a4.786 4.786 0 01-.61.562c-.187.14-.43.266-.726.375-.188.063-.297.156-.328.281a.71.71 0 01-.188.375.979.979 0 01-.351.258.733.733 0 00-.328.258c-.079.11-.141.242-.188.398a4.25 4.25 0 01-.281.844.93.93 0 01-.281.328.771.771 0 01-.024.188v.164c0 .219.024.445.07.68.063.218.102.437.118.656.312.547.68 1.047 1.101 1.5.422.437.875.844 1.36 1.219.484.374.984.726 1.5 1.054.53.328 1.054.649 1.57.961.187-.015.36.008.515.07.157.047.32.079.493.094.187.14.406.25.656.328l.75.235c.25.078.492.172.726.28.235.095.43.227.586.4a.833.833 0 01.211.07.873.873 0 00.211.023c.094 0 .149-.031.164-.094.704.266 1.391.563 2.063.891a10.72 10.72 0 002.133.727c.297.25.625.468.984.656.36.187.719.383 1.078.586.36.187.703.398 1.031.633.329.218.618.484.868.796.03.297.093.586.187.868.11.265.164.554.164.867zm14.04-5.156a.469.469 0 01-.188.398.367.367 0 00-.188.328c0 .063.032.14.094.235-.219 0-.367.07-.445.21-.078.141-.157.297-.235.47h-.304a.333.333 0 00-.188.046.596.596 0 00-.14.14 4.45 4.45 0 00-.141.235 3.58 3.58 0 00-.867.305 9.83 9.83 0 00-.797.422c-.25.14-.508.289-.774.445a5.39 5.39 0 01-.82.352 1.52 1.52 0 01-.61.562h-.07a.32.32 0 01-.21-.023.253.253 0 00-.188-.07c-.047 0-.078.007-.094.023a2.769 2.769 0 01-1.57.468c-.156 0-.305-.007-.445-.023a2.052 2.052 0 00-.446-.047c-.047 0-.078.016-.093.047l-.047.094a.367.367 0 01-.07.093c-.016.032-.071.047-.165.047-.172 0-.343-.023-.515-.07a1.247 1.247 0 00-.54-.023 4.577 4.577 0 01-.843-.586c-.203-.188-.39-.47-.563-.844a1.932 1.932 0 00-.328-.492 1.66 1.66 0 01-.281-.516 8.376 8.376 0 01-.07-.328 37.344 37.344 0 01-.094-.54 37.288 37.288 0 00-.094-.538 4.714 4.714 0 01-.023-.352c0-.187.008-.367.023-.539l.094-.562c.094-.594.156-1.188.187-1.782.047-.609.18-1.195.399-1.757a2.758 2.758 0 01-.047-.492v-.516a2.1 2.1 0 00-.117-.75 1.27 1.27 0 00.187-.68c0-.281-.117-.445-.351-.492v-.07c0-.328-.11-.586-.328-.774 0-.547.132-.953.398-1.219.281-.28.648-.523 1.102-.726.062-.094.085-.172.07-.234.11.03.21.062.305.093a.884.884 0 00.28.047c.157 0 .298-.023.423-.07a.452.452 0 00.351.351c.203.032.367.079.492.141v.305c0 .484.118.945.352 1.383a1.173 1.173 0 00-.117.398c-.016.14-.024.273-.024.398 0 .188.008.375.024.563.015.187.023.367.023.539 0 .188-.023.375-.07.563a.889.889 0 01-.258.492c-.015.203-.031.437-.047.703 0 .25-.015.508-.047.773a4.196 4.196 0 01-.117.774c-.062.25-.156.453-.281.61l-.047.726v.68c0 .343.016.75.047 1.218.047.469.156.86.328 1.172.078.125.227.219.445.281.235.063.422.094.563.094.172 0 .344-.023.515-.07a.674.674 0 00.399-.305c.094.016.156.062.187.14.032.079.086.141.165.188.89-.375 1.78-.734 2.671-1.078.891-.344 1.766-.742 2.625-1.195a.879.879 0 00.399.093c.156 0 .312-.015.469-.047a2.38 2.38 0 01.468-.046h.164a.745.745 0 01.047.21zm17.273 4.312a.981.981 0 01-.305.54c-.14.124-.313.226-.516.304a2.905 2.905 0 01-.632.164c-.204.015-.391.023-.563.023h-.234a.873.873 0 00-.211-.023c-.078 0-.117.039-.117.117 0 .078-.04.133-.118.164a1.194 1.194 0 00-.469-.094c-.109 0-.218.008-.328.024a1.71 1.71 0 01-.28.023.654.654 0 01-.282-.047c-.047-.03-.094-.062-.14-.093a.938.938 0 00-.118-.141.343.343 0 00-.164-.117c-.11-.047-.203-.055-.281-.024-.063.032-.164-.015-.305-.14a2.45 2.45 0 01-.492-.563c-.125-.234-.25-.476-.375-.726s-.258-.5-.398-.75a3.006 3.006 0 00-.493-.657h-.187c-.281 0-.477.118-.586.352a2.136 2.136 0 01-.234-.164.992.992 0 00-.258-.188c-.36.11-.735.204-1.125.282-.39.078-.782.117-1.172.117h-.328c-.094 0-.196-.016-.305-.047-.156.063-.297.14-.422.234a.78.78 0 01-.422.118.756.756 0 01-.328-.094c-.094 0-.14.039-.14.117.015.078-.032.117-.141.117h-.211a9.22 9.22 0 00-.656.024 8.27 8.27 0 01-.633.023c-.297 0-.602-.039-.914-.117a.491.491 0 01-.258.07.296.296 0 00-.14.164l-.094.188a.6.6 0 01-.14.14c-.048.032-.118.04-.212.024a.728.728 0 01-.234.445c-.125.11-.188.274-.188.492-.172.094-.312.211-.422.352-.109.14-.218.289-.328.445-.11.156-.226.305-.351.445-.11.141-.25.25-.422.329-.078.093-.102.242-.07.445-.172.14-.383.266-.633.375a1.76 1.76 0 01-.703.164c-.454 0-.766-.242-.938-.727 0-.156.016-.32.047-.492.016-.187.047-.36.094-.515.047-.172.117-.32.21-.446a.786.786 0 01.4-.304c0-.141-.048-.235-.142-.282-.093-.062-.132-.164-.117-.304.422-.203.79-.47 1.102-.797.312-.328.594-.672.844-1.031l.796-1.125c.266-.375.563-.711.891-1.008v-.492c.469-.5.773-1.063.914-1.688.172-.031.281-.11.328-.234a.984.984 0 00.094-.446c.078 0 .125-.03.14-.093.032-.078.102-.102.212-.07.14-.376.296-.72.468-1.032l.516-.937a8.24 8.24 0 00.445-1.008c.14-.344.242-.727.305-1.149.219-.015.336-.117.352-.304.03-.204.062-.383.093-.54.235-.218.407-.476.516-.773.125-.297.234-.601.328-.914.094-.328.195-.648.305-.96.125-.329.297-.618.515-.868v-.07c0-.079-.03-.125-.093-.141-.063-.031-.094-.086-.094-.164.015-.016.023-.031.023-.047a.827.827 0 00.422-.375.807.807 0 01.422-.398c.328.265.617.43.867.492.25.047.578.086.985.117.203.219.312.484.328.797.03.297.086.594.164.89.125.5.258.993.398 1.477.156.469.274.953.352 1.453.047.297.133.578.258.844s.21.539.257.82c.032.219.032.469 0 .75-.03.266 0 .5.094.703l.164.375c.078.172.14.352.188.54.062.187.117.374.164.562.125.469.234.977.328 1.523.11.532.273 1.016.492 1.453a.655.655 0 00.352.329c.172.062.359.109.562.14.203.016.399.024.586.024.203-.016.375-.024.516-.024h.234c.094 0 .188.016.281.047a.756.756 0 01.094.328.561.561 0 01-.187.446.488.488 0 00-.188.375c0 .078.031.164.094.257a1.25 1.25 0 00-.281-.023c-.36 0-.711.062-1.055.187.125.266.289.493.492.68.219.172.445.336.68.492a.777.777 0 01.492-.187c.187 0 .36.047.516.14.171.079.351.118.539.118.14 0 .242-.024.304-.07.125.14.227.288.305.445.078.14.18.273.305.398zm-7.336-3.75c-.032-.266-.086-.453-.164-.562a2.431 2.431 0 01-.164-.446 4.657 4.657 0 01-.141-.703 5.417 5.417 0 00-.094-.726 29.241 29.241 0 00-.375-1.594 10.487 10.487 0 00-.492-1.547.475.475 0 00.094-.258v-.07a1.403 1.403 0 01-.305-.563c-.062-.234-.125-.46-.187-.68a2.508 2.508 0 00-.211-.632 1.02 1.02 0 00-.399-.492.726.726 0 00-.07.328c0 .11.008.21.023.304a.96.96 0 01.047.305.75.75 0 00-.351.375.761.761 0 01-.328.375c-.125.5-.305.977-.54 1.43-.234.437-.484.875-.75 1.312-.25.438-.492.883-.726 1.336a7.14 7.14 0 00-.563 1.383c-.203.14-.343.32-.421.54a2.38 2.38 0 00-.094.655c.14.078.297.125.469.141h.539c.172 0 .336.016.492.047.156.031.297.11.422.234a2.88 2.88 0 01.656-.117 1.34 1.34 0 00.61-.21c.312.108.648.163 1.007.163.188 0 .367-.015.54-.047.187-.03.366-.07.538-.117.14.031.25.086.328.164.078.063.196.086.352.07a.37.37 0 00.14-.187.408.408 0 01.118-.21zm26.133-9.61c-.063.204-.165.391-.305.563l-.399.492a2.894 2.894 0 00-.328.516 1.102 1.102 0 00-.07.61h-.117a.387.387 0 00-.117-.024c-.25 0-.446.062-.586.187-.125.11-.297.204-.516.282a1.295 1.295 0 00-.117-.258.355.355 0 00-.211-.188c-.375.079-.75.141-1.125.188-.375.031-.75.078-1.125.14a3.17 3.17 0 00-.516.141c-.172.047-.351.094-.539.14a.959.959 0 01-.304.048 1.157 1.157 0 00-.329 0c-.375.015-.78.046-1.218.093a2.639 2.639 0 00-1.172.352 4.667 4.667 0 00-.492-.07 5.7 5.7 0 00-.516-.024c-.375 0-.79.04-1.242.117a3.156 3.156 0 00-1.172.399 1.458 1.458 0 00-.539-.094c-.031 0-.055.008-.07.023h-.07c-.016.141 0 .282.046.422a.716.716 0 00.305.305c-.063.172-.094.36-.094.563 0 .265.016.53.047.796.047.266.07.532.07.797 0 .297-.039.532-.117.703.156.47.234.97.234 1.5 0 .188-.015.375-.046.563-.016.172-.024.36-.024.562 0 .172.063.313.188.422a.469.469 0 01.187.399.415.415 0 01-.047.187c.219-.047.43-.11.633-.187.203-.094.414-.14.633-.14.125 0 .242.023.351.07.125.046.235.109.329.187a7.912 7.912 0 00-.047.258v.773l.047.469a2.76 2.76 0 01-.446.586c-.156.172-.265.39-.328.656-.234 0-.445.055-.633.164a3.368 3.368 0 00-.492.328c-.156.11-.312.22-.469.328a.983.983 0 01-.515.141c-.235 0-.399-.031-.492-.094a.95.95 0 01-.211-.234 2.45 2.45 0 00-.141-.211c-.031-.063-.11-.086-.234-.07a1.705 1.705 0 00-.188-.563 5.992 5.992 0 00-.305-.539 8.902 8.902 0 00-.304-.515 2.747 2.747 0 01-.211-.563 4.84 4.84 0 01-.117-1.266 3.175 3.175 0 00-.211-1.265 9.372 9.372 0 00.093-1.336c0-.438-.015-.867-.046-1.29a925.32 925.32 0 01-.047-1.335c-.11-.14-.18-.297-.211-.469a77.9 77.9 0 00-.047-.539 1.522 1.522 0 00-.164-.14.356.356 0 01-.094-.188 1.28 1.28 0 00-.281-.047.956.956 0 00-.563.164.726.726 0 01-.398.14c-.125 0-.242-.015-.352-.046a1.191 1.191 0 00-.328-.047c-.094 0-.148.023-.164.07 0 .031-.031.063-.094.094-.047.031-.156.063-.328.094a15.97 15.97 0 01-.586.094l-.61.046a5.666 5.666 0 01-.374.024c-.25 0-.438-.047-.563-.14a8.313 8.313 0 00-.492-.352.764.764 0 00.047-.188.507.507 0 00-.14-.375c-.094-.11-.141-.203-.141-.281 0-.172.07-.305.21-.399.126-.093.196-.242.212-.445.36-.156.726-.273 1.101-.351.375-.079.758-.141 1.149-.188.39-.047.773-.101 1.148-.164.39-.063.774-.164 1.149-.305l.304.047h.328c.47 0 .93-.047 1.383-.14a6.27 6.27 0 011.43-.165 3.025 3.025 0 01.75.094 65.48 65.48 0 001.852-.304c.624-.11 1.265-.204 1.921-.282.313-.03.618-.054.914-.07.313-.031.625-.07.938-.117a.594.594 0 00.234-.07c.063-.047.094-.133.094-.258.14.062.297.093.469.093.265 0 .523-.046.773-.14.25-.094.508-.14.774-.14a.52.52 0 01.164.023h.14c.11 0 .164-.047.164-.141.016-.11.094-.18.235-.21.11-.032.265-.056.469-.071l.632-.047c.235-.031.446-.063.633-.094.203-.047.352-.11.445-.187l.165-.258c.28.015.484.14.609.375.14.219.219.46.234.726a.348.348 0 00.258.094 2.69 2.69 0 01.328-.023h.07zm11.554.165v.094c-.11.03-.164.109-.164.234-.172.078-.351.14-.539.187a2.15 2.15 0 00-.539.164 5.969 5.969 0 00-.539-.023 5.703 5.703 0 00-.516-.023c-.468 0-.937.015-1.406.046-.469.032-.937.032-1.406 0a3.383 3.383 0 01-.727.305c-.25.063-.492.094-.726.094a1.56 1.56 0 01-.492-.07 6.84 6.84 0 01-1.243.468c-.437.125-.882.25-1.336.375-.453.11-.89.242-1.312.399-.406.14-.766.344-1.078.61a9.365 9.365 0 00-.094 1.265c0 .219.008.422.023.61.032.187.086.374.165.562.078.03.164.054.257.07.11.016.204.023.282.023.078 0 .156-.007.234-.023a.283.283 0 00.164-.164c.234-.031.469-.04.703-.024h.703c.235 0 .461-.007.68-.023.234-.016.46-.055.68-.117.25-.063.492-.102.726-.117l.727-.047c.234-.016.476-.04.726-.07.25-.047.508-.133.774-.258.203.078.406.117.61.117.218 0 .429.015.632.047.11.078.195.164.258.258a.497.497 0 01.117.328c0 .218-.078.437-.234.656a4.634 4.634 0 00-.375.61h-.258c-.375 0-.742.054-1.102.163-.344.094-.695.211-1.054.352-.344.125-.696.242-1.055.351-.344.094-.703.141-1.078.141-.063 0-.102.04-.117.117 0 .063-.016.11-.047.14a1.933 1.933 0 00-.352-.023c-.36 0-.703.04-1.031.118a4.332 4.332 0 01-1.008.117h-.281l-.281-.047a.608.608 0 01-.305.258.858.858 0 00-.352.187c-.047.14-.078.313-.093.516 0 .203-.008.414-.024.633 0 .203-.016.398-.047.586a.897.897 0 01-.187.445c.015.078.078.11.187.094.11-.032.164.015.164.14 0 .14-.015.29-.047.446a2.389 2.389 0 00-.046.468c0 .297.03.625.093.985.078.343.188.664.328.96.157.298.36.548.61.75.25.188.562.282.937.282.25 0 .485-.047.703-.14.22-.094.399-.25.54-.47l.117-.023c.062 0 .117.008.164.024a.77.77 0 00.187.023c.094 0 .211-.055.352-.164.156-.125.32-.266.492-.422.188-.156.375-.305.563-.445.187-.157.367-.266.539-.328.109-.22.21-.438.304-.657.11-.218.266-.39.469-.515v-.68c.156-.172.32-.328.492-.469.188-.14.328-.32.422-.539.078.032.148.055.211.07a1.194 1.194 0 00.469 0c.094-.015.18-.038.258-.07.125.172.218.367.28.586.079.203.173.399.282.586-.14.281-.305.617-.492 1.008-.188.39-.39.781-.61 1.172-.218.39-.453.765-.703 1.125-.234.344-.468.61-.703.797-.047.047-.148.101-.304.164-.172.125-.329.242-.47.351-.14.125-.273.266-.398.422-.453.14-.89.328-1.312.563-.406.234-.813.46-1.219.68a2.507 2.507 0 00-.61-.07c-.187 0-.374.007-.562.023-.187.03-.39.046-.61.046a.502.502 0 00-.28-.164c-.11-.015-.149-.093-.118-.234-.53-.031-.96-.18-1.289-.445a3.486 3.486 0 01-.843-.938 6.138 6.138 0 01-.54-1.219 23.9 23.9 0 00-.445-1.265v-.07c0-.079.031-.126.094-.141.063-.016.094-.063.094-.14 0-.032-.008-.055-.024-.071a22.3 22.3 0 01-.117-.445 1.857 1.857 0 01-.047-.446c0-.25.016-.492.047-.726.031-.25.047-.5.047-.75s-.031-.47-.094-.657c.063-.078.117-.18.164-.304a3.945 3.945 0 00.094-.844c.016-.14.04-.266.07-.375a47.24 47.24 0 00-.164-.445 1.557 1.557 0 01-.07-.492v-.165a5.66 5.66 0 00.398-.82c.11-.281.227-.57.352-.867v-.07c0-.454-.016-.907-.047-1.36a19.781 19.781 0 01-.047-1.36v-.444c0-.157.008-.305.024-.446a.645.645 0 00.28-.258.646.646 0 01.282-.257h.774l.14-.235a.728.728 0 00.094-.258c.172-.046.336-.109.492-.187.172-.094.328-.188.469-.281.219-.125.414-.235.586-.328.187-.11.367-.196.539-.258.187-.078.383-.14.586-.188.203-.047.437-.086.703-.117.125 0 .203-.023.234-.07.047-.047.11-.102.188-.164l.562.093c.188.016.375.024.563.024.375 0 .726-.07 1.055-.211.468 0 .93-.008 1.382-.024.47-.015.938-.023 1.407-.023.406 0 .812.016 1.218.047.407.031.805.086 1.196.164.14-.047.297-.07.468-.07.188 0 .375.023.563.07.203.031.398.031.586 0 .016.172.055.32.117.445.078.11.117.242.117.399z"
            fill="currentColor"
        />
    </svg>
)

export {
    Logo,
    Header
}