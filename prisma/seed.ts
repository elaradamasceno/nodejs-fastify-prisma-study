//mock dos eventos

import { prisma } from "../src/lib/prisma";

async function seed(){
  const details = 'Seed representa um conjunto de dados iniciais para preencher o banco visando facilitar o desenvolvimento e testes da aplicação.'
  await prisma.event.create({
    data: {
      id: '31dce8a2-39d0-45cb-822d-9173add8f67c',
      title: 'Criando evento com seed',
      slug: 'Criando evento com seed', //url do evento
      details,
      maximumAttendees: 120,
    }

  })
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect()
})