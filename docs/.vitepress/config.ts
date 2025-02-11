import { defineConfig } from 'vitepress';

// Refer to https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR', 
  title: 'GAVS Fitness House',
  description: 'Documentação do aplicativo para treino em casa.',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Início', link: '/index.md' }, 
      { text: 'Introdução', link: '/introducao.md' },
      { text: 'Objetivos', link: '/objetivos.md' },
      { text: 'Escopo', link: '/escopo.md' },
      { text: 'Público-alvo', link: '/publico-alvo.md' },
      { text: 'Descrição do Projeto', link: '/descricao_projeto.md' },
      { text: 'Canvas', link: '/canvas.md' },
      { text: 'Stakeholders', link: '/stakeholders.md' },
      { text: 'Recursos e Funcionalidades', link: '/recursos_funcionalidades.md' },
      { text: 'Casos de Uso', link: '/caso_de_uso.md' },
      { text: 'Diagrama de Classe', link: '/diagramaDeClasse.md' }, 
      { text: 'Prototipos de Telas', link: '/prototiposTela.md' }, 
      { text: 'Riscos e Mitigação', link: '/riscos_mitigacao.md' },
      { text: 'Custos e Orçamento', link: '/custos.md' },
      { text: 'Considerações Finais', link: '/consideracoes_finais.md' },
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
      { text: 'Início', link: '/index.md' }, 
      { text: '1 - Introdução', link: '/introducao.md' },
      { text: '1.1 - Objetivos', link: '/objetivos.md' },
      { text: '1.2 - Escopo', link: '/escopo.md' },
      { text: '1.4 - Público-alvo', link: '/publico-alvo.md' },
      { text: '2 - Descrição do Projeto', link: '/descricao_projeto.md' },
      { text: '2.1 - Canvas', link: '/canvas.md' },
      { text: '2.2 - Stakeholders', link: '/stakeholders.md' },
      { text: '3 - Recursos e Funcionalidades', link: '/recursos_funcionalidades.md' },
      { text: '4 - Casos de Uso', link: '/caso_de_uso.md' },
      { text: '5 - Diagrama de Classe', link: '/diagramaDeClasse.md' },
      { text: '6 - Prototipos de Telas', link: '/prototiposTela.md' }, 
      { text: '8 - Riscos e Mitigação', link: '/riscos_mitigacao.md' },
      { text: '9 - Custos e Orçamento', link: '/custos.md' },
      { text: '10 - Considerações Finais', link: '/consideracoes_finais.md' },
        ],
      },
    ],
  },
});