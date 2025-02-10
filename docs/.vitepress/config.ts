import { defineConfig } from 'vitepress';

// Refer to https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR', // Altere para o idioma desejado
  title: 'GAVS Fitness House',
  description: 'Documentação do aplicativo para treino em casa.',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/index.md' }, 
      { text: 'Introdução', link: '/introducao.md' },
      { text: 'Objetivos', link: '/objetivos.md' },
      { text: 'Escopo', link: '/escopo.md' },
      { text: 'Público-alvo', link: '/publico-alvo.md' },
      { text: 'Descrição do Projeto', link: '/descricao_projeto.md' },
      { text: 'Stakeholders', link: '/stakeholders.md' },
      { text: 'Recursos e Funcionalidades', link: '/recursos_funcionalidades.md' },
      { text: 'Casos de Uso', link: '/caso_de_uso.md' },
      { text: 'Diagrama de Classe', link: '/diagramaDeClasse.md' }, 
      { text: 'Canvas', link: '/canvas.md' },
      { text: 'Riscos e Mitigação', link: '/riscos_mitigacao.md' },
      { text: 'Custos e Orçamento', link: '/custos.md' },
      { text: 'Considerações Finais', link: '/consideracoes_finais.md' },
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
          { text: 'Início', link: '/index.md' }, 
          { text: 'Introdução', link: '/introducao.md' },
          { text: 'Objetivos', link: '/objetivos.md' },
          { text: 'Escopo', link: '/escopo.md' },
          { text: 'Público-alvo', link: '/publico-alvo.md' },
          { text: 'Descrição do Projeto', link: '/descricao_projeto.md' },
          { text: 'Stakeholders', link: '/stakeholders.md' },
          { text: 'Recursos e Funcionalidades', link: '/recursos_funcionalidades.md' },
          { text: 'Casos de Uso', link: '/caso_de_uso.md' },
          { text: 'Diagrama de Classe', link: '/diagramaDeClasse.md' }, 
          { text: 'Canvas', link: '/canvas.md' },
          { text: 'Riscos e Mitigação', link: '/riscos_mitigacao.md' },
          { text: 'Custos e Orçamento', link: '/custos.md' },
          { text: 'Considerações Finais', link: '/consideracoes_finais.md' },
        ],
      },
    ],
  },
});
