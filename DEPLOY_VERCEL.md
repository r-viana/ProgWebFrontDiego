# Deploy do Frontend na Vercel

Este guia explica como fazer deploy do frontend na Vercel.

## Pré-requisitos

1. Conta na Vercel (https://vercel.com/)
2. Repositório Git do projeto (GitHub, GitLab ou Bitbucket)
3. Backend já hospedado e funcionando (para obter a URL da API)

## Passo 1: Preparar o Repositório

1. Certifique-se de que todo o código está commitado
2. Faça push para o repositório remoto (GitHub recomendado)

```bash
git add .
git commit -m "Preparar projeto para deploy na Vercel"
git push origin main
```

## Passo 2: Importar Projeto na Vercel

1. Acesse https://vercel.com/ e faça login
2. Clique em **"Add New..." → "Project"**
3. Selecione o repositório do frontend (ProjetoDiegoFront)
4. Clique em **"Import"**

## Passo 3: Configurar Variáveis de Ambiente

Na tela de configuração do projeto, adicione as seguintes variáveis de ambiente:

### Variáveis Obrigatórias:

```env
# API Backend URL - SUBSTITUA PELA URL DO SEU BACKEND EM PRODUÇÃO
NEXT_PUBLIC_API_URL=https://seu-backend.herokuapp.com

# Currency Symbol
NEXT_PUBLIC_CURRENCY_SYMBOL=R$

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://hfdllcymbezkmerewsct.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZGxsY3ltYmV6a21lcmV3c2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjA1NTEsImV4cCI6MjA3NTkzNjU1MX0.ci3QdkBSMGAvrq-SX64FDREFmhtx1KKv_kE5xbwhW9g

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZGlzdGluY3QtamF3ZmlzaC01My5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_lrkwLfijOYwvzPh8WY5Swc8XHidHf72rsruEuOUdkL
CLERK_WEBHOOK_SECRET=whsec_bpriF+eArFJ09q7J4UooZ8+MSFCDERIj
```

### ⚠️ IMPORTANTE:

- **NEXT_PUBLIC_API_URL**: Substitua pela URL do seu backend em produção
- As variáveis que começam com `NEXT_PUBLIC_` são expostas no browser
- Nunca exponha keys sensíveis com o prefixo `NEXT_PUBLIC_`

## Passo 4: Configurações do Build

A Vercel detecta automaticamente que é um projeto Next.js. As configurações padrão são:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Não é necessário alterar essas configurações.

## Passo 5: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build finalizar (geralmente 2-5 minutos)
3. Após o deploy, você receberá uma URL como: `https://seu-projeto.vercel.app`

## Passo 6: Configurar Domínio Personalizado (Opcional)

1. Na dashboard do projeto na Vercel, vá em **Settings → Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções da Vercel

## Passo 7: Configurar Webhooks do Clerk

1. Acesse o dashboard do Clerk (https://dashboard.clerk.com/)
2. Vá em **Webhooks**
3. Adicione um novo endpoint: `https://seu-projeto.vercel.app/api/webhooks/clerk`
4. Selecione os eventos que deseja receber

## Verificar Deploy

Após o deploy, teste:

1. ✅ Página inicial carrega corretamente
2. ✅ Login com Clerk funciona
3. ✅ Conexão com backend funciona (testar criar/listar anúncios)
4. ✅ Upload de imagens para Supabase funciona

## Problemas Comuns

### Erro: "NEXT_PUBLIC_API_URL is not defined"
- Verifique se adicionou a variável de ambiente na Vercel
- Após adicionar variáveis, é necessário fazer um novo deploy

### Erro 404 ao chamar API
- Verifique se a URL do backend está correta
- Verifique se o backend está online e acessível
- Verifique CORS no backend (deve permitir a origem da Vercel)

### Erro de autenticação do Clerk
- Verifique se as keys do Clerk estão corretas
- Verifique se o domínio está autorizado no dashboard do Clerk

## Atualizar Deployment

Para atualizar após mudanças no código:

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

A Vercel fará deploy automaticamente a cada push para a branch principal.

## Deploy Manual

Se preferir fazer deploy manual:

```bash
npm install -g vercel
vercel login
vercel
```

## Monitoramento

- Logs de build: Veja na dashboard da Vercel
- Logs de runtime: Veja em **Deployments → [seu deploy] → Runtime Logs**
- Analytics: Disponível na dashboard da Vercel

## Rollback

Para voltar a uma versão anterior:

1. Vá em **Deployments**
2. Encontre o deployment que funcionava
3. Clique nos 3 pontos → **Promote to Production**

---

**Documentação Oficial**: https://vercel.com/docs
