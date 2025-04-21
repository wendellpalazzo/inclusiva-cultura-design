export const formatters = {
  cpf(value: string): string {
    let cleaned = `${value}`.replace(/\D/g, "").slice(0, 11)
    cleaned = cleaned.replace(/(\d{3})(\d)/, "$1.$2")
    cleaned = cleaned.replace(/(\d{3})(\d)/, "$1.$2")
    cleaned = cleaned.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    return cleaned
  },
  // mais otimizado para o 9o digito celular
  // e também funciona com número telefone normal 8 dig
  phoneNumber(value: string): string {
    let cleaned = `${value}`.replace(/\D/g, "").slice(0, 11)
    cleaned = cleaned.replace(/(\d{2})(\d)/, "($1) $2")
    cleaned = cleaned.replace(/(\d)(\d{4})$/, "$1-$2")
    return cleaned
  },
  cep(value: string): string {
    let cleaned = `${value}`.replace(/\D/g, "").slice(0, 8)
    cleaned = cleaned.replace(/(\d{5})(\d{3})$/, "$1-$2")
    return cleaned
  },
  onlyNumbers(value: string): string {
    return value?.replace(/\D/g, "")
  },
  date(input: string): string {
    input = input.replaceAll("/", "")
    const day = input.slice(0, 2)
    const month = input.length > 2 ? `/${input.slice(2, 4)}` : ""
    const year = input.length > 4 ? `/${input.slice(4, 8)}` : ""

    return `${day}${month}${year}`
  },
  numeric(number: string): string {
    let value = number.length ? number.replace(/\D/g, "") : "0"
    value = (parseFloat(value) / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2
    })
    return value
  },
  monetary(number: string = "0,00"): string {
    return parseFloat(number || "0,00").toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  },
  noSymbols(text: string = ""): string {
    return text.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ\s]/g, "")
  },
  getNumber(text: string): number {
    return parseFloat(text.replace(/\./g, "").replace(",", "."))
  }
}
