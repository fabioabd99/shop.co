import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });

// 1. Damos um "tipo" ao globalThis para ele aceitar a nossa propriedade `prisma`
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// 2. Se já existe um cliente no global, reutiliza. Senão, cria um novo.
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

// 3. Em desenvolvimento, guarda o cliente no global para o próximo hot-reload o encontrar.
//    Em produção não guardamos — não há hot-reload, e poluir o global é má prática.
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
