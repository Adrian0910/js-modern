//singleton
//No permite crear multiples instancias de una misma clase pero si permite
//retornar el obj instancido

let instancia = null
class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre
      this.email = email
      instancia = this
    }
    return instancia
  }
}

const persona2 = new Persona('Lety', 'lety@gmail.com')
console.log(persona2)

const persona = new Persona('Adrian', 'adrian@gmail.com')
console.log(persona)
