function encode(string) {
    return string.replace(/([ \w])\1+/g, (group, chr) => group.length + chr )
}

function decode(string) {
    return string.replace(/(\d+)([ \w])/g, (_, count, chr) => chr.repeat(count))
}

console.log(encode("wwwiiuuuu")) // 3w2i4u
console.log(decode("2u3a4o")) // uuaaaoooo
console.log(decode("8t9w4Q"))
console.log(encode("GGGGrrxxxxxxxxxxQQQ"))