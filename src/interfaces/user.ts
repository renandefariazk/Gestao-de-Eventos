interface Icreate{
  name: string
  password: string
  email: string
  telefone: string
  role: string
}

interface Ilogin{
  email: string
  password: string
}

interface Ifind{
  name?: string
  password?: string
  email?: string
  telefone?: string
  role?: string
}

export { Icreate, Ilogin, Ifind };