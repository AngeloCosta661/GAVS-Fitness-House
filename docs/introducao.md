# Introdução

## Minimundo: App para Treino em Casa

**Objetivo:** Facilitar o acesso a atividades físicas e incentivar uma vida saudável, oferecendo programas personalizados de exercícios para diferentes níveis de aptidão física.

**Entidades Principais:**
- **Usuário:** Nome, Idade, Endereço, Telefone, E-mail, Senha, Nível de Aptidão Física, Progresso, Histórico de Treinos, Identificador Único.
- **Financeiro:** Mensalidades, Taxas Específicas, Status (Ativo/Inativo).
- **Treino:** Nome do Treino, Nível de Dificuldade, Duração, Equipamentos Necessários, Vídeos Explicativos, Data, Horário.
- **Notificação:** Data, Hora, Tipo (Lembrete de Treino, Progresso).
- **Evento:** Nome do Evento, Data, Horário, Limite de Participantes, Custos.

**Relacionamentos:**
- Cada usuário pode acessar múltiplos treinos.
- Cada usuário pode receber múltiplas notificações.
- Cada usuário pode se inscrever em múltiplos eventos.
- Cada treino está associado a um vídeo explicativo específico.
- Cada evento pode ter múltiplos usuários inscritos.
- Cada pagamento realizado por um usuário atualiza seu status financeiro.

**Regras de Negócio:**
- Usuários devem se cadastrar e fazer login para acessar os treinos.
- O sistema deve acompanhar o progresso dos usuários e fornecer notificações de lembrete para treinos.
- O app deve enviar notificações automáticas para lembretes de treinos, eventos e progresso.