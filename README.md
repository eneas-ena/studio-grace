# Studio Grace

Agendamento e pagamento do Studio Grace, design de sobrancelhas: a cliente escolhe o serviço, o dia e o horário, e pode pagar por Pix.

**Abrir o app:** https://eneas-ena.github.io/studio-grace/

## Como funciona

- App feito em página web; abre direto no navegador e pode ser instalado na tela inicial do celular ou do iPad.
- A cliente não precisa de cadastro: agenda pelo link e acompanha os próprios horários.
- O Pix é gerado no padrão do Banco Central (QR Code e copia e cola), com a chave do profissional.
- A administração (agenda, clientes, serviços e confirmação de pagamentos) pede a senha do Studio.
- Os dados ficam no Supabase e só são lidos e gravados por funções do banco (`sg_...`), que conferem cada pedido.
- Mostra o número da versão na tela, tem modo claro e escuro (sol/lua) e botão para atualizar.

## Como publicar uma nova versão

1. Nesta página do repositório, clique em **Add file → Upload files**.
2. Arraste os arquivos novos, com os mesmos nomes dos antigos.
3. Clique em **Commit changes**.

Em um ou dois minutos a nova versão está no ar no mesmo endereço. No app, o aviso **"Atualizar agora"** aparece sozinho quando há versão nova.

---
Desenvolvido por Bispo Enéas Araújo.
