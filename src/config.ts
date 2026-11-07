/**
 * Configurações da Página de Vendas
 * 
 * Para configurar o checkout da sua plataforma (Hotmart, Kiwify, Eduzz, Braip, Stripe, etc.):
 * Cole o link direto do checkout na constante CHECKOUT_URL abaixo.
 * 
 * Exemplo:
 * export const CHECKOUT_URL = "https://pay.kiwify.com.br/exemplo";
 */

// Insira aqui a URL do seu checkout de pagamento
export const CHECKOUT_URL: string = "";

// Informações do produto e suporte
export const PRODUCT_CONFIG = {
  name: "+200 Projetos de Eletrônica para Alunos",
  badge: "MATERIAL DIGITAL EDUCATIVO | +200 PROJETOS PRÁTICOS",
  price: "9,90",
  currency: "R$",
  paymentType: "Pagamento único · Sem mensalidades",
  supportEmail: "suporte@eletronicaedu.com.br",
  supportWhatsapp: "(11) 98765-4321",
  totalProjects: "200+",
  format: "Material Digital (PDF e Guias Interativos)",
  guaranteeDays: 7,
};
