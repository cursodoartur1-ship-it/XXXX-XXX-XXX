export interface ProjectCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  exampleProjects: string[];
  icon: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  tip: string;
}

export interface AudienceItem {
  id: string;
  role: string;
  title: string;
  description: string;
  idealFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SampleProject {
  id: string;
  number: string;
  title: string;
  category: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  estimatedTime: string;
  objective: string;
  materials: string[];
  steps: string[];
  conceptLearned: string;
}

export const PAIN_POINTS = [
  {
    title: "Dificuldade de compreensão dos circuitos",
    description: "Estudantes tentam memorizar fórmulas e esquemas abstratos na lousa, mas não conseguem relacioná-los com o mundo real.",
    highlight: "Conceitos abstratos geram frustração.",
  },
  {
    title: "Falta de ideias práticas para as aulas",
    description: "Criar experimentos inovadores e seguros do zero toda semana consome tempo precioso que o educador não tem.",
    highlight: "Repetir sempre os mesmos experimentos desmotiva.",
  },
  {
    title: "Tempo excessivo na preparação de atividades",
    description: "Horas perdidas buscando referências soltas na internet, muitas vezes com esquemas com erros ou componentes caros.",
    highlight: "Preparação cansativa e sem roteiro validado.",
  },
  {
    title: "Dificuldade em prender a atenção da turma",
    description: "Aulas puramente expositivas competem contra telas e distrações. O aluno se dispersa rapidamente se não colocar a mão na massa.",
    highlight: "Atenção cai drasticamente após 15 minutos de teoria.",
  },
  {
    title: "Necessidade de tornar a tecnologia tangível",
    description: "Os alunos usam celulares todos os dias, mas desconhecem como a corrente elétrica e os componentes trabalham juntos.",
    highlight: "Falta de visualização prática dos componentes em ação.",
  },
];

export const PRODUCT_CATEGORIES: ProjectCategory[] = [
  {
    id: "basic-circuits",
    number: "01",
    title: "Circuitos Elétricos Básicos",
    description: "Projetos introdutórios envolvendo pilhas, fios condutores, interruptores e LEDs, desenvolvidos para que o aluno compreenda os princípios fundamentais dos circuitos elétricos fechados e abertos.",
    tags: ["Pilhas & Baterias", "Chaves Gangorra", "Sentido da Corrente", "Circuito Fechado"],
    exampleProjects: [
      "Circuito Simples de Iluminação com Interruptor",
      "Circuito Série vs. Circuito Paralelo Demonstrativo",
      "Testador de Materiais Condutores e Isolantes",
      "Lanterna de Papelão e LED de Baixa Tensão",
    ],
    icon: "Zap",
  },
  {
    id: "led-projects",
    number: "02",
    title: "Projetos com LEDs",
    description: "Experiências práticas com iluminação, polaridade correta dos diodos emissores de luz, cálculo intuitivo de resistores e diferentes configurações de circuitos com LEDs.",
    tags: ["Polaridade Anodo/Catodo", "Resistores Limitadores", "LEDs Coloridos", "Sinalizadores"],
    exampleProjects: [
      "Semáforo Didático com 3 Fases de Sinalização",
      "Indicador Luminoso de Carga com LED Bicolor",
      "Árvore de Luzes em Paralelo com Alimentação 3V",
      "Painel de Sinalização Escolar Passo a Passo",
    ],
    icon: "Lightbulb",
  },
  {
    id: "motors-movement",
    number: "03",
    title: "Motores e Movimento",
    description: "Projetos utilizando pequenos motores elétricos DC de baixa tensão para demonstrar na prática a conversão de energia elétrica em energia mecânica e cinemática.",
    tags: ["Motores DC 3V–6V", "Hélices e Polias", "Inversão de Polaridade", "Energia Cinética"],
    exampleProjects: [
      "Mini Ventilador de Mesa Portátil com Chave Liga/Desliga",
      "Carrinho Movido a Hélice com Chassi Reciclado",
      "Batedor Vibratório tipo 'Vibro-Bot' com Motor DC",
      "Guindaste Elétrico Simples com Polia e Carretel",
    ],
    icon: "RotateCw",
  },
  {
    id: "alarms-sensors",
    number: "04",
    title: "Alarmes e Sensores",
    description: "Atividades educativas para compreender princípios de detecção do ambiente, acionamento automático por luminosidade ou contato, e sinalização sonora com buzzers.",
    tags: ["Sensor LDR de Luz", "Buzzers Piezoelétricos", "Interruptor Magnético", "Automação Básica"],
    exampleProjects: [
      "Alarme Residencial de Porta com Contato Simples",
      "Detector Crepuscular de Luz com Fotoresistor LDR",
      "Sensor de Umidade e Nível de Água para Plantas",
      "Campainha Elétrica Interativa com Buzzer Contínuo",
    ],
    icon: "Bell",
  },
  {
    id: "educational-robotics",
    number: "05",
    title: "Projetos de Robótica Educativa",
    description: "Construções introdutórias que ajudam o estudante a compreender a relação direta entre componentes eletrônicos, chassi mecânico, movimento e automação prática.",
    tags: ["Chassi Robótico", "Interruptores de Fim de Curso", "Controle Direcional", "Engrenagens"],
    exampleProjects: [
      "Robô Explorador que Desvia de Obstáculos por Toque",
      "Braço Articulado com Tração Elétrica e Polias",
      "Plataforma com Duplo Motor e Controle por Cabo",
      "Robô Escovinha ('Brushbot') com Eixo Desbalanceado",
    ],
    icon: "Bot",
  },
  {
    id: "practical-challenges",
    number: "06",
    title: "Desafios Práticos de Eletrônica",
    description: "Atividades estruturadas com problemas reais para estimular raciocínio lógico, criatividade investigativa, formulação de hipóteses e resolução de problemas em grupo.",
    tags: ["Resolução de Falhas", "Trabalho em Equipe", "Pensamento Crítico", "Desafio Maker"],
    exampleProjects: [
      "Desafio do Circuito com Falha: Encontre o Erro",
      "Jogo de Coordenação Elétrica (Aramado Não Encoste)",
      "Desafio do Sistema de Segurança de Cofre Secreto",
      "Quiz Eletrônico com Resposta Certa por LED Verde",
    ],
    icon: "Target",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "b1",
    title: "Aulas mais práticas e participativas",
    description: "Troque a passividade dos alunos por envolvimento real. Cada estudante se torna protagonista ao montar circuitos funcionais com as próprias mãos.",
    icon: "Users",
  },
  {
    id: "b2",
    title: "Estímulo ao raciocínio lógico e criatividade",
    description: "Montar circuitos exercita a resolução de problemas, a compreensão de causa e efeito e o pensamento analítico desde as primeiras lições.",
    icon: "Brain",
  },
  {
    id: "b3",
    title: "Compreensão facilitada de conceitos de eletrônica",
    description: "Tensão, corrente, resistência e polaridade deixam de ser abstrações e se tornam fenômenos visíveis através do brilho do LED e do giro do motor.",
    icon: "Eye",
  },
  {
    id: "b4",
    title: "Economia de tempo na preparação de atividades",
    description: "Tenha em mãos uma biblioteca pronta com mais de 200 propostas organizadas, evitando noites em claro pesquisando roteiros incompletos na internet.",
    icon: "Clock",
  },
  {
    id: "b5",
    title: "Projetos em diferentes níveis de dificuldade",
    description: "Comece com circuitos muito simples de apenas 2 componentes e avance gradativamente até protótipos de robótica e sensores automáticos.",
    icon: "TrendingUp",
  },
  {
    id: "b6",
    title: "Incentivo à aprendizagem pela experimentação",
    description: "Errar, testar e corrigir na prática ensina muito mais do que decorar respostas. Os alunos desenvolvem autonomia investigativa.",
    icon: "Compass",
  },
];

export const STEPS: StepItem[] = [
  {
    step: 1,
    title: "Escolha o projeto que deseja desenvolver",
    description: "Navegue pelo índice estruturado da biblioteca digital e selecione a atividade alinhada ao tema da sua aula ou ao nível da turma.",
    tip: "Filtre por tema: LEDs, motores, sensores ou circuitos básicos.",
  },
  {
    step: 2,
    title: "Confira os materiais e componentes necessários",
    description: "Consulte a lista clara e padronizada de componentes de baixa tensão (como pilhas AA, protoboard, fios de ligação e LEDs).",
    tip: "Itens de fácil acesso no comércio local ou online.",
  },
  {
    step: 3,
    title: "Siga as instruções de montagem passo a passo",
    description: "Acompanhe os esquemas visuais didáticos que mostram exatamente onde cada terminal deve ser conectado sem complicações.",
    tip: "Instruções pensadas especificamente para fins didáticos.",
  },
  {
    step: 4,
    title: "Teste o circuito e explore o que foi aprendido",
    description: "Acione o interruptor, observe a reação física dos componentes e use as perguntas guiadas para consolidar o conceito teórico.",
    tip: "O aprendizado se fixa através da observação prática.",
  },
];

export const TARGET_AUDIENCE: AudienceItem[] = [
  {
    id: "professores",
    role: "Professores e Educadores",
    title: "Transforme suas aulas de ciências e física",
    description: "Perfeito para professores do Ensino Fundamental e Médio que querem levar dinâmicas maker e laboratoriais para a sala de aula sem complicação.",
    idealFor: "Ideal para planejar planos de aula práticos e dinâmicos.",
  },
  {
    id: "escolas",
    role: "Escolas e Projetos Educacionais",
    title: "Enriqueça a grade extracurricular",
    description: "Excelente recurso para coordenadores e instituições de ensino que desejam implantar ou ampliar oficinas de tecnologia, ciência e inovação.",
    idealFor: "Padronização de atividades maker para múltiplas turmas.",
  },
  {
    id: "robotica",
    role: "Instrutores de Robótica Educativa",
    title: "Base sólida de eletrônica para robôs",
    description: "Instrutores que precisam ensinar aos alunos os princípios de circuitos e componentes analógicos antes de partirem para a programação de microcontroladores.",
    idealFor: "Fundamentos essenciais de hardware para robótica.",
  },
  {
    id: "alunos",
    role: "Alunos e Estudantes de Eletrônica",
    title: "Aprenda na prática e no seu ritmo",
    description: "Estudantes curiosos ou iniciantes em cursos técnicos que querem praticar projetos reais em casa, fortalecendo seu portfólio de conhecimento.",
    idealFor: "Autonomia para estudar e construir protótipos em casa.",
  },
  {
    id: "pais",
    role: "Pais e Famílias",
    title: "Incentive o interesse dos filhos por tecnologia",
    description: "Pais que buscam atividades criativas e educativas fora das telas de celular, estimulando curiosidade científica e momentos em família.",
    idealFor: "Atividades construtivas para desenvolver habilidades manuais.",
  },
];

export const SAMPLE_PROJECTS: SampleProject[] = [
  {
    id: "sample-1",
    number: "Projeto #014",
    title: "Semáforo Didático com Chave Seletora e 3 LEDs",
    category: "Projetos com LEDs & Circuitos Básicos",
    difficulty: "Iniciante",
    estimatedTime: "25 a 35 minutos",
    objective: "Compreender a comutação de corrente e controle individual de cargas com LEDs em paralelo.",
    materials: [
      "1x Protoboard de 400 ou 830 pontos",
      "3x LEDs de 5mm (Vermelho, Amarelo e Verde)",
      "3x Resistores de 220 Ohms ou 330 Ohms",
      "1x Suporte com 2 pilhas AA (3V)",
      "1x Chave seletora ou jumpers para chaveamento manual",
      "Fios de conexão macho-macho (jumpers)",
    ],
    steps: [
      "Conecte o suporte de pilhas nas linhas laterais de alimentação da protoboard (positivo no barramento vermelho, negativo no barramento azul).",
      "Insira os três LEDs em colunas separadas, atentando para a perna mais longa (ânodo positivo).",
      "Adicione um resistor de 220 Ohms em série com o terminal negativo (cátodo) de cada LED até o barramento negativo.",
      "Utilize o jumper de controle para ligar alternadamente cada LED ao positivo, simulando as fases de trânsito: Pare, Atenção e Siga.",
    ],
    conceptLearned: "Sentido da corrente elétrica, polaridade dos diodos (ânodo/cátodo) e função do resistor de proteção.",
  },
  {
    id: "sample-2",
    number: "Projeto #068",
    title: "Carrinho de Hélice com Mini Motor DC de Baixa Tensão",
    category: "Motores e Movimento",
    difficulty: "Intermediário",
    estimatedTime: "40 a 50 minutos",
    objective: "Demonstrar a transformação de energia elétrica em energia cinética através de propulsão a ar.",
    materials: [
      "1x Mini motor elétrico DC de 3V a 6V",
      "1x Mini hélice de plástico (2 ou 3 pás)",
      "1x Chave gangorra liga/desliga (toggle switch)",
      "1x Suporte para 2 pilhas AA (3V)",
      "Chassi leve (papelão reciclado, plástico ou balsa)",
      "4x Tampinhas ou rodinhas com eixo de palito de churrasco",
    ],
    steps: [
      "Monte o chassi com os dois eixos de rodinhas para que girem livremente com pouco atrito.",
      "Fixe o motor DC na parte superior do chassi com a hélice voltada para a traseira.",
      "Conecte um dos polos do suporte de pilhas a um dos terminais da chave liga/desliga.",
      "Ligue o outro terminal da chave ao motor, e o polo restante do suporte de pilhas diretamente ao motor.",
      "Acione a chave e observe a direção do vento: se empurrar o carro para trás, inverta os fios do motor para obter empuxo para a frente.",
    ],
    conceptLearned: "Conversão eletromecânica, terceira lei de Newton (ação e reação) e inversão de sentido de rotação via polaridade.",
  },
  {
    id: "sample-3",
    number: "Projeto #112",
    title: "Alarme Detector de Luz Noturna com Sensor LDR e Buzzer",
    category: "Alarmes e Sensores",
    difficulty: "Intermediário",
    estimatedTime: "35 a 45 minutos",
    objective: "Entender como resistores variáveis pela luz (fotoresistores) acionam sinalizadores sonoros.",
    materials: [
      "1x Sensor fotoresistor LDR de 5mm",
      "1x Transistor NPN (BC547 ou 2N2222)",
      "1x Buzzer piezoelétrico contínuo de 5V",
      "1x Resistor de 10k Ohms e 1x Resistor de 1k Ohm",
      "1x Suporte de 4 pilhas AA ou bateria 9V",
      "Protoboard e cabos de conexão",
    ],
    steps: [
      "Monte o divisor de tensão na protoboard usando o resistor de 10k Ohms e o LDR.",
      "Conecte o ponto central do divisor de tensão à base do transistor NPN.",
      "Conecte o emissor do transistor ao barramento negativo da fonte.",
      "Ligue o terminal negativo do buzzer ao coletor do transistor e o terminal positivo do buzzer à linha de alimentação positiva.",
      "Cubra o LDR com a mão para simular escuridão ou ilumine-o com uma lanterna para testar o limiar de acionamento do alarme.",
    ],
    conceptLearned: "Divisores de tensão resistivos, funcionamento do transistor como chave eletrônica amplificadora e sensores ópticos.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O material é físico ou digital?",
    answer: "O material é 100% digital. Você terá acesso aos arquivos em formato digital (PDFs didáticos estruturados e guias de montagem passo a passo) para visualizar no computador, tablet, celular ou imprimir as fichas dos projetos para distribuir aos seus alunos. Não há envio de componentes físicos pelo correio.",
  },
  {
    question: "Preciso ter conhecimentos avançados de eletrônica?",
    answer: "Não necessariamente! A biblioteca foi estruturada com uma progressão didática que parte do absoluto zero — com projetos introdutórios de apenas 2 ou 3 componentes básicos. Conforme você e sua turma ganham confiança, podem avançar para projetos com sensores, circuitos transistorizados e robótica básica.",
  },
  {
    question: "Os componentes eletrônicos estão incluídos?",
    answer: "Não. O produto oferece toda a metodologia, documentação digital, esquemas elétricos didáticos e instruções passo a passo para a realização de mais de 200 projetos. Os componentes físicos (como pilhas, fios, protoboard e LEDs) devem ser adquiridos separadamente no comércio eletrônico ou lojas locais de componentes elétricos/eletrônicos.",
  },
  {
    question: "Posso utilizar os projetos em sala de aula?",
    answer: "Sim! O material foi idealizado justamente para servir como recurso de apoio ao planejamento de aulas práticas, feiras de ciências, oficinas maker e clubes de robótica. Você pode utilizar as fichas com suas turmas em conformidade com a licença educacional de uso individual do comprador.",
  },
  {
    question: "Os projetos são adequados para qualquer idade?",
    answer: "Não. A adequação varia conforme o nível de complexidade e maturidade de cada projeto. Todas as atividades foram pensadas para trabalhar com circuitos seguros de baixíssima tensão (pilhas de 1,5V a 9V). Crianças e adolescentes devem sempre realizar as práticas sob supervisão de um adulto ou educador responsável.",
  },
  {
    question: "Como recebo o material?",
    answer: "O acesso é digital e imediato após a confirmação do pagamento. Você receberá um e-mail com os dados de acesso para fazer o download de toda a biblioteca de projetos em seu dispositivo e começar a utilizar no mesmo instante.",
  },
];

export const LEGAL_TERMS = {
  termsOfUse: `TERMOS DE USO — +200 PROJETOS DE ELETRÔNICA PARA ALUNOS

1. Natureza do Produto
O produto '+200 Projetos de Eletrônica para Alunos' consiste exclusivamente em uma biblioteca didática digital composta por manuais, diagramas ilustrados e instruções passo a passo para desenvolvimento de atividades educativas de eletrônica. Não inclui componentes físicos, ferramentas, pilhas, placas ou materiais de montagem.

2. Licença de Uso
A aquisição concede ao comprador uma licença pessoal, não transferível e não exclusiva para utilizar o material como apoio pedagógico, planejamento de aulas e realização de estudos individuais. É expressamente vedada a revenda, sublicenciamento, redistribuição pública na internet ou reprodução comercial total ou parcial do conteúdo sem autorização prévia por escrito.

3. Segurança e Supervisão
Todos os projetos contidos no material foram elaborados para circuitos experimentais de baixa tensão contínua (exclusivamente pilhas e baterias de até 9V). Em nenhuma circunstância circuitos devem ser conectados diretamente à rede elétrica residencial (110V/220V). Menores de idade devem sempre desenvolver as atividades sob a orientação e supervisão presencial de um responsável legal ou professor qualificado.

4. Garantia Legal
Em conformidade com o Código de Defesa do Consumidor (Art. 49), o comprador possui até 7 (sete) dias a contar da data da compra para solicitar o cancelamento e reembolso integral caso o produto não atenda às suas expectativas.`,

  privacyPolicy: `POLÍTICA DE PRIVACIDADE

1. Coleta e Uso de Informações
Valorizamos a privacidade e a segurança dos dados de nossos clientes. As informações fornecidas durante o processo de compra (como nome, e-mail e dados cadastrais) são processadas de forma segura e criptografada exclusivamente pela plataforma de pagamento integrada para fins de emissão de cobrança e liberação imediata do acesso digital.

2. Não Armazenamento de Dados Sensíveis de Cartão
Este site não armazena nem tem acesso a números de cartões de crédito ou dados bancários sensíveis. Todo o processamento financeiro é executado em ambiente protegido e certificado PCI-DSS pelas instituições de pagamento parceiras.

3. Comunicação e Suporte
O seu endereço de e-mail cadastrado será utilizado unicamente para envio dos links de acesso ao material, atualizações pedagógicas importantes sobre o produto e atendimento às solicitações de suporte. Jamais comercializamos ou repassamos seus dados a terceiros.

4. Dúvidas sobre Privacidade
Caso tenha dúvidas sobre como seus dados são tratados, entre em contato com nossa equipe através do e-mail de suporte indicado no rodapé da página.`,
};
