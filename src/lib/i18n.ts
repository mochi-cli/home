export type LocaleCode = "en" | "es" | "fr" | "de" | "ja" | "zh" | "vi";

export const locales: { code: LocaleCode; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "zh", label: "中文", short: "ZH" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
];

export const DEFAULT_LOCALE: LocaleCode = "en";

interface Feature {
  title: string;
  desc: string;
}
interface Step {
  title: string;
  desc: string;
}
interface Plan {
  tagline: string;
  features: string[];
}

export interface Messages {
  hero: { headline: string; sub: string };
  feat: { title: string; items: Feature[] };
  flow: { title: string; steps: Step[] };
  tpl: { title: string; sub: string; items: string[] };
  char: { title: string; sub: string };
  price: { title: string; sub: string; billed: string; popular: string; plans: Plan[] };
  cta: { sub: string };
  footer: { tagline: string };
}

const en: Messages = {
  hero: {
    headline: "Let your AI agents talk to your data",
    sub: "Mochi turns SQLite into an agent-native workspace: spin up a template in one command, operate your data in natural language, and commit it safely to Git.",
  },
  feat: {
    title: "Everything your agent needs to work with data",
    items: [
      {
        title: "Chat naturally with Claude, Codex & OpenCode",
        desc: "Talk directly in natural language. Mochi understands your workspace context and operates data for you through typed tools.",
      },
      {
        title: "Create a template in one command",
        desc: "Ready-made schemas for CRM, HRM, inventory and projects — sample data included.",
      },
      {
        title: "Commit data safely to Git",
        desc: "Never commit a live SQLite file. Export a text-based JSON/Markdown bundle that's easy to diff and branch.",
      },
      {
        title: "Write history & rollback anytime",
        desc: "Every agent change is tracked. Review and roll back to a previous state with a single command.",
      },
    ],
  },
  flow: {
    title: "Three steps to an agent-native workspace",
    steps: [
      { title: "Initialize a workspace", desc: "Pick a ready-made template. Mochi builds the schema, relations and sample data in seconds." },
      { title: "Chat with your agent", desc: "Claude, Codex or OpenCode operate data through typed tools — no SQL required." },
      { title: "Commit to Git", desc: "Export a text-based bundle that's easy to review and diff. One branch per workspace." },
    ],
  },
  tpl: {
    title: "Ready-made templates, customizable when needed",
    sub: "Each template ships with a schema, data relations and sample data — enough for your agent to start right away, simple enough to tailor to your needs.",
    items: [
      "Customers, sales opportunities, interaction history",
      "People, departments, attendance, reviews",
      "Products, stock, real-time in/out flow",
      "Tasks, progress, members, deadlines",
    ],
  },
  char: {
    title: "Meet Mochi",
    sub: "A small, round, always-ready sidekick — standing between your AI agents and your database. Mochi never decides for you; it just makes every data operation simple, safe and easy to track.",
  },
  price: {
    title: "Choose your plan",
    sub: "Start free. Level up when you're ready.",
    billed: "billed monthly",
    popular: "MOST POPULAR",
    plans: [
      { tagline: "For solo hobby projects", features: ["1 workspace", "Local SQLite + templates", "Community support"] },
      { tagline: "For individual builders", features: ["Unlimited workspaces", "Git bundle deploy", "Write history & rollback", "Priority support"] },
      { tagline: "For growing teams", features: ["Everything in Pro", "Shared workspaces", "One branch per member", "SSO & audit log"] },
    ],
  },
  cta: { sub: "Install Mochi in seconds and start with your first template." },
  footer: { tagline: "The agent-native data sidekick for Claude, Codex and OpenCode." },
};

const es: Messages = {
  hero: {
    headline: "Deja que tus agentes de IA hablen con tus datos",
    sub: "Mochi convierte SQLite en un espacio de trabajo nativo para agentes: crea una plantilla con un solo comando, opera tus datos en lenguaje natural y guárdalos con seguridad en Git.",
  },
  feat: {
    title: "Todo lo que tu agente necesita para trabajar con datos",
    items: [
      { title: "Chatea con naturalidad con Claude, Codex y OpenCode", desc: "Habla directamente en lenguaje natural. Mochi entiende el contexto de tu espacio de trabajo y opera los datos por ti mediante herramientas tipadas." },
      { title: "Crea una plantilla con un solo comando", desc: "Esquemas listos para CRM, HRM, inventario y proyectos, con datos de ejemplo incluidos." },
      { title: "Guarda los datos con seguridad en Git", desc: "Nunca subas un archivo SQLite en vivo. Exporta un paquete de texto JSON/Markdown fácil de comparar y ramificar." },
      { title: "Historial de escritura y reversión cuando quieras", desc: "Cada cambio del agente queda registrado. Revisa y revierte a un estado anterior con un solo comando." },
    ],
  },
  flow: {
    title: "Tres pasos hacia un espacio nativo para agentes",
    steps: [
      { title: "Inicializa un espacio de trabajo", desc: "Elige una plantilla lista. Mochi crea el esquema, las relaciones y los datos de ejemplo en segundos." },
      { title: "Chatea con tu agente", desc: "Claude, Codex u OpenCode operan los datos con herramientas tipadas, sin escribir SQL." },
      { title: "Sube a Git", desc: "Exporta un paquete de texto fácil de revisar y comparar. Una rama por espacio de trabajo." },
    ],
  },
  tpl: {
    title: "Plantillas listas, personalizables cuando haga falta",
    sub: "Cada plantilla incluye un esquema, relaciones de datos y datos de ejemplo: suficiente para que tu agente empiece de inmediato y simple para adaptarla a tus necesidades.",
    items: [
      "Clientes, oportunidades de venta, historial de interacciones",
      "Personas, departamentos, asistencia, evaluaciones",
      "Productos, stock, entradas/salidas en tiempo real",
      "Tareas, progreso, miembros, plazos",
    ],
  },
  char: {
    title: "Conoce a Mochi",
    sub: "Un pequeño compañero redondo y siempre listo, entre tus agentes de IA y tu base de datos. Mochi nunca decide por ti; solo hace que cada operación de datos sea simple, segura y fácil de seguir.",
  },
  price: {
    title: "Elige tu plan",
    sub: "Empieza gratis. Sube de nivel cuando quieras.",
    billed: "facturado mensualmente",
    popular: "MÁS POPULAR",
    plans: [
      { tagline: "Para proyectos personales", features: ["1 espacio de trabajo", "SQLite local + plantillas", "Soporte de la comunidad"] },
      { tagline: "Para creadores individuales", features: ["Espacios ilimitados", "Despliegue de paquete Git", "Historial y reversión", "Soporte prioritario"] },
      { tagline: "Para equipos en crecimiento", features: ["Todo lo de Pro", "Espacios compartidos", "Una rama por miembro", "SSO y registro de auditoría"] },
    ],
  },
  cta: { sub: "Instala Mochi en segundos y empieza con tu primera plantilla." },
  footer: { tagline: "El compañero de datos nativo para agentes: Claude, Codex y OpenCode." },
};

const fr: Messages = {
  hero: {
    headline: "Laissez vos agents IA dialoguer avec vos données",
    sub: "Mochi transforme SQLite en un espace de travail natif pour agents : créez un modèle en une commande, manipulez vos données en langage naturel et validez-les en toute sécurité sur Git.",
  },
  feat: {
    title: "Tout ce dont votre agent a besoin pour travailler avec les données",
    items: [
      { title: "Discutez naturellement avec Claude, Codex et OpenCode", desc: "Parlez directement en langage naturel. Mochi comprend le contexte de votre espace et manipule les données pour vous via des outils typés." },
      { title: "Créez un modèle en une seule commande", desc: "Des schémas prêts à l'emploi pour CRM, RH, inventaire et projets — données d'exemple incluses." },
      { title: "Validez vos données en toute sécurité sur Git", desc: "Ne validez jamais un fichier SQLite en direct. Exportez un bundle texte JSON/Markdown facile à comparer et à versionner." },
      { title: "Historique des écritures et retour arrière à tout moment", desc: "Chaque modification de l'agent est suivie. Consultez et revenez à un état précédent en une commande." },
    ],
  },
  flow: {
    title: "Trois étapes vers un espace natif pour agents",
    steps: [
      { title: "Initialisez un espace de travail", desc: "Choisissez un modèle prêt. Mochi crée le schéma, les relations et les données d'exemple en quelques secondes." },
      { title: "Discutez avec votre agent", desc: "Claude, Codex ou OpenCode manipulent les données via des outils typés — sans SQL." },
      { title: "Validez sur Git", desc: "Exportez un bundle texte facile à relire et à comparer. Une branche par espace de travail." },
    ],
  },
  tpl: {
    title: "Des modèles prêts à l'emploi, personnalisables au besoin",
    sub: "Chaque modèle est livré avec un schéma, des relations de données et des données d'exemple — assez pour démarrer tout de suite, assez simple pour l'adapter à vos besoins.",
    items: [
      "Clients, opportunités de vente, historique des interactions",
      "Personnes, services, présence, évaluations",
      "Produits, stock, entrées/sorties en temps réel",
      "Tâches, avancement, membres, échéances",
    ],
  },
  char: {
    title: "Voici Mochi",
    sub: "Un petit compagnon tout rond et toujours prêt, entre vos agents IA et votre base de données. Mochi ne décide jamais à votre place ; il rend simplement chaque opération sur les données simple, sûre et facile à suivre.",
  },
  price: {
    title: "Choisissez votre formule",
    sub: "Commencez gratuitement. Passez au niveau supérieur quand vous voulez.",
    billed: "facturé mensuellement",
    popular: "LE PLUS POPULAIRE",
    plans: [
      { tagline: "Pour les projets perso", features: ["1 espace de travail", "SQLite local + modèles", "Support communautaire"] },
      { tagline: "Pour les créateurs individuels", features: ["Espaces illimités", "Déploiement de bundle Git", "Historique et retour arrière", "Support prioritaire"] },
      { tagline: "Pour les équipes qui grandissent", features: ["Tout de Pro", "Espaces partagés", "Une branche par membre", "SSO et journal d'audit"] },
    ],
  },
  cta: { sub: "Installez Mochi en quelques secondes et démarrez avec votre premier modèle." },
  footer: { tagline: "Le compagnon de données natif pour agents : Claude, Codex et OpenCode." },
};

const de: Messages = {
  hero: {
    headline: "Lass deine KI-Agenten mit deinen Daten sprechen",
    sub: "Mochi macht SQLite zu einem agentennativen Workspace: Erstelle eine Vorlage mit einem Befehl, bearbeite deine Daten in natürlicher Sprache und committe sie sicher zu Git.",
  },
  feat: {
    title: "Alles, was dein Agent für die Arbeit mit Daten braucht",
    items: [
      { title: "Chatte natürlich mit Claude, Codex & OpenCode", desc: "Sprich direkt in natürlicher Sprache. Mochi versteht den Kontext deines Workspace und bearbeitet Daten für dich über typisierte Tools." },
      { title: "Erstelle eine Vorlage mit einem Befehl", desc: "Fertige Schemata für CRM, HRM, Inventar und Projekte – Beispieldaten inklusive." },
      { title: "Committe Daten sicher zu Git", desc: "Committe nie eine aktive SQLite-Datei. Exportiere ein textbasiertes JSON/Markdown-Bundle, das sich leicht vergleichen und verzweigen lässt." },
      { title: "Schreibverlauf & Rollback jederzeit", desc: "Jede Änderung des Agenten wird verfolgt. Prüfe und setze mit einem Befehl auf einen früheren Stand zurück." },
    ],
  },
  flow: {
    title: "Drei Schritte zu einem agentennativen Workspace",
    steps: [
      { title: "Workspace initialisieren", desc: "Wähle eine fertige Vorlage. Mochi erstellt Schema, Relationen und Beispieldaten in Sekunden." },
      { title: "Mit deinem Agenten chatten", desc: "Claude, Codex oder OpenCode bearbeiten Daten über typisierte Tools – ohne SQL." },
      { title: "Zu Git committen", desc: "Exportiere ein textbasiertes Bundle, das sich leicht prüfen und vergleichen lässt. Ein Branch pro Workspace." },
    ],
  },
  tpl: {
    title: "Fertige Vorlagen, bei Bedarf anpassbar",
    sub: "Jede Vorlage kommt mit Schema, Datenrelationen und Beispieldaten – genug, damit dein Agent sofort loslegt, einfach genug für deine Anpassungen.",
    items: [
      "Kunden, Verkaufschancen, Interaktionsverlauf",
      "Personen, Abteilungen, Anwesenheit, Bewertungen",
      "Produkte, Bestand, Zu-/Abgänge in Echtzeit",
      "Aufgaben, Fortschritt, Mitglieder, Fristen",
    ],
  },
  char: {
    title: "Das ist Mochi",
    sub: "Ein kleiner, runder, stets bereiter Begleiter – zwischen deinen KI-Agenten und deiner Datenbank. Mochi entscheidet nie für dich; es macht jede Datenoperation nur einfach, sicher und leicht nachvollziehbar.",
  },
  price: {
    title: "Wähle deinen Plan",
    sub: "Kostenlos starten. Aufsteigen, wenn du bereit bist.",
    billed: "monatlich abgerechnet",
    popular: "AM BELIEBTESTEN",
    plans: [
      { tagline: "Für private Hobbyprojekte", features: ["1 Workspace", "Lokales SQLite + Vorlagen", "Community-Support"] },
      { tagline: "Für einzelne Entwickler", features: ["Unbegrenzte Workspaces", "Git-Bundle-Deploy", "Schreibverlauf & Rollback", "Priorisierter Support"] },
      { tagline: "Für wachsende Teams", features: ["Alles aus Pro", "Geteilte Workspaces", "Ein Branch pro Mitglied", "SSO & Audit-Log"] },
    ],
  },
  cta: { sub: "Installiere Mochi in Sekunden und starte mit deiner ersten Vorlage." },
  footer: { tagline: "Der agentennative Datenbegleiter für Claude, Codex und OpenCode." },
};

const ja: Messages = {
  hero: {
    headline: "AIエージェントをあなたのデータと対話させよう",
    sub: "MochiはSQLiteをエージェントネイティブなワークスペースに変えます。1つのコマンドでテンプレートを作成し、自然言語でデータを操作し、安全にGitへコミットできます。",
  },
  feat: {
    title: "エージェントがデータを扱うために必要なすべて",
    items: [
      { title: "Claude・Codex・OpenCodeと自然に対話", desc: "自然言語でそのまま話しかけるだけ。Mochiはワークスペースの文脈を理解し、型付きツールでデータを操作します。" },
      { title: "1コマンドでテンプレートを作成", desc: "CRM・HRM・在庫・プロジェクト向けのスキーマをすぐに利用可能。サンプルデータ付き。" },
      { title: "データを安全にGitへコミット", desc: "稼働中のSQLiteファイルはコミットしません。差分やブランチ管理が容易なテキスト形式のJSON/Markdownバンドルを書き出します。" },
      { title: "書き込み履歴とロールバックをいつでも", desc: "エージェントの変更はすべて記録。1コマンドで以前の状態を確認・復元できます。" },
    ],
  },
  flow: {
    title: "エージェントネイティブなワークスペースへの3ステップ",
    steps: [
      { title: "ワークスペースを初期化", desc: "既製テンプレートを選ぶだけ。Mochiがスキーマ・リレーション・サンプルデータを数秒で作成します。" },
      { title: "エージェントと対話", desc: "Claude・Codex・OpenCodeが型付きツールでデータを操作。SQLは不要です。" },
      { title: "Gitへコミット", desc: "レビューや差分が容易なテキストバンドルを書き出します。ワークスペースごとに1ブランチ。" },
    ],
  },
  tpl: {
    title: "既製テンプレート、必要に応じてカスタマイズ",
    sub: "各テンプレートにはスキーマ・データリレーション・サンプルデータが付属。エージェントがすぐ動き出せて、あなたのニーズに合わせて簡単に調整できます。",
    items: [
      "顧客、商談、対応履歴",
      "従業員、部署、勤怠、評価",
      "商品、在庫、リアルタイムの入出庫",
      "タスク、進捗、メンバー、期限",
    ],
  },
  char: {
    title: "Mochiを紹介",
    sub: "小さくて丸い、いつでも頼れる相棒。AIエージェントとデータベースの間に立ちます。Mochiが代わりに判断することはなく、すべてのデータ操作をシンプルで安全、追跡しやすくします。",
  },
  price: {
    title: "プランを選ぶ",
    sub: "無料で始めて、必要になったらレベルアップ。",
    billed: "月額請求",
    popular: "一番人気",
    plans: [
      { tagline: "個人の趣味プロジェクト向け", features: ["ワークスペース1つ", "ローカルSQLite＋テンプレート", "コミュニティサポート"] },
      { tagline: "個人開発者向け", features: ["ワークスペース無制限", "Gitバンドルデプロイ", "書き込み履歴とロールバック", "優先サポート"] },
      { tagline: "成長するチーム向け", features: ["Proのすべて", "共有ワークスペース", "メンバーごとに1ブランチ", "SSOと監査ログ"] },
    ],
  },
  cta: { sub: "数秒でMochiをインストールして、最初のテンプレートから始めましょう。" },
  footer: { tagline: "Claude・Codex・OpenCodeのためのエージェントネイティブなデータ相棒。" },
};

const zh: Messages = {
  hero: {
    headline: "让你的 AI 智能体与数据对话",
    sub: "Mochi 把 SQLite 变成面向智能体的工作区：一条命令创建模板，用自然语言操作数据，并安全地提交到 Git。",
  },
  feat: {
    title: "智能体处理数据所需的一切",
    items: [
      { title: "与 Claude、Codex 和 OpenCode 自然对话", desc: "直接用自然语言交流。Mochi 理解你的工作区上下文，并通过类型化工具替你操作数据。" },
      { title: "一条命令创建模板", desc: "为 CRM、HRM、库存和项目预置的架构，附带示例数据。" },
      { title: "安全地把数据提交到 Git", desc: "绝不提交实时 SQLite 文件。导出易于对比和分支的文本 JSON/Markdown 包。" },
      { title: "随时查看写入历史与回滚", desc: "智能体的每次更改都被记录。一条命令即可查看并回滚到之前的状态。" },
    ],
  },
  flow: {
    title: "三步搭建面向智能体的工作区",
    steps: [
      { title: "初始化工作区", desc: "选择一个预置模板。Mochi 在数秒内创建架构、关系和示例数据。" },
      { title: "与智能体对话", desc: "Claude、Codex 或 OpenCode 通过类型化工具操作数据——无需 SQL。" },
      { title: "提交到 Git", desc: "导出便于评审和对比的文本包。每个工作区一个分支。" },
    ],
  },
  tpl: {
    title: "预置模板，按需定制",
    sub: "每个模板都自带架构、数据关系和示例数据——足以让智能体立即上手，又简单到可按你的需求调整。",
    items: [
      "客户、销售机会、互动记录",
      "人员、部门、考勤、评估",
      "商品、库存、实时出入库",
      "任务、进度、成员、截止日期",
    ],
  },
  char: {
    title: "认识 Mochi",
    sub: "一个小小的、圆滚滚、随时待命的伙伴——站在你的 AI 智能体和数据库之间。Mochi 从不替你做决定，只让每一次数据操作都简单、安全、易于追踪。",
  },
  price: {
    title: "选择你的方案",
    sub: "免费开始，准备好再升级。",
    billed: "按月计费",
    popular: "最受欢迎",
    plans: [
      { tagline: "适合个人业余项目", features: ["1 个工作区", "本地 SQLite + 模板", "社区支持"] },
      { tagline: "适合独立开发者", features: ["无限工作区", "Git 包部署", "写入历史与回滚", "优先支持"] },
      { tagline: "适合成长中的团队", features: ["Pro 的全部功能", "共享工作区", "每位成员一个分支", "SSO 与审计日志"] },
    ],
  },
  cta: { sub: "几秒钟安装 Mochi，从你的第一个模板开始。" },
  footer: { tagline: "面向 Claude、Codex 和 OpenCode 的智能体原生数据伙伴。" },
};

const vi: Messages = {
  hero: {
    headline: "Để AI agent trò chuyện với dữ liệu của bạn",
    sub: "Mochi biến SQLite thành workspace agent-native: tạo template trong một lệnh, thao tác dữ liệu bằng ngôn ngữ tự nhiên, và commit an toàn lên Git.",
  },
  feat: {
    title: "Mọi thứ agent cần để làm việc với dữ liệu",
    items: [
      { title: "Tương tác tự nhiên với Claude, Codex & OpenCode", desc: "Nói chuyện trực tiếp bằng ngôn ngữ tự nhiên. Mochi hiểu ngữ cảnh workspace và thao tác dữ liệu thay bạn qua các tool có kiểu." },
      { title: "Tạo template trong một lệnh", desc: "Schema dựng sẵn cho CRM, HRM, kho vận, dự án — kèm dữ liệu mẫu." },
      { title: "Commit dữ liệu an toàn lên Git", desc: "Không commit file SQLite sống. Xuất bundle JSON/Markdown dễ diff, theo nhánh." },
      { title: "Lịch sử ghi & rollback bất kỳ lúc nào", desc: "Mọi thay đổi của agent đều được theo dõi. Xem lại và hoàn tác về trạng thái trước đó chỉ với một lệnh." },
    ],
  },
  flow: {
    title: "Ba bước tới một workspace agent-native",
    steps: [
      { title: "Khởi tạo workspace", desc: "Chọn một template dựng sẵn. Mochi tạo schema, quan hệ và dữ liệu mẫu trong vài giây." },
      { title: "Trò chuyện với agent", desc: "Claude, Codex hay OpenCode thao tác dữ liệu qua các tool có kiểu — không cần viết SQL." },
      { title: "Commit lên Git", desc: "Xuất bundle text-based dễ review và diff. Mỗi workspace một nhánh riêng." },
    ],
  },
  tpl: {
    title: "Template dựng sẵn, tùy biến khi cần",
    sub: "Mỗi template đi kèm schema, quan hệ dữ liệu và bộ dữ liệu mẫu — đủ để agent bắt đầu ngay, đủ đơn giản để bạn chỉnh theo nhu cầu riêng.",
    items: [
      "Khách hàng, cơ hội bán hàng, lịch sử tương tác",
      "Nhân sự, phòng ban, chấm công, đánh giá",
      "Sản phẩm, tồn kho, nhập xuất thời gian thực",
      "Task, tiến độ, thành viên, deadline",
    ],
  },
  char: {
    title: "Gặp gỡ Mochi",
    sub: "Một trợ lý nhỏ, tròn trịa và luôn sẵn sàng — đứng giữa AI agent của bạn và cơ sở dữ liệu. Mochi không thay bạn quyết định, chỉ giúp mọi thao tác dữ liệu trở nên đơn giản, an toàn và dễ theo dõi.",
  },
  price: {
    title: "Chọn gói của bạn",
    sub: "Bắt đầu miễn phí. Nâng cấp khi bạn sẵn sàng.",
    billed: "thanh toán hàng tháng",
    popular: "PHỔ BIẾN NHẤT",
    plans: [
      { tagline: "Cho dự án cá nhân", features: ["1 workspace", "SQLite cục bộ + template", "Hỗ trợ cộng đồng"] },
      { tagline: "Cho nhà phát triển cá nhân", features: ["Workspace không giới hạn", "Deploy bundle Git", "Lịch sử ghi & rollback", "Hỗ trợ ưu tiên"] },
      { tagline: "Cho đội nhóm đang lớn", features: ["Mọi thứ trong Pro", "Workspace dùng chung", "Mỗi thành viên một nhánh", "SSO & nhật ký kiểm toán"] },
    ],
  },
  cta: { sub: "Cài đặt Mochi trong vài giây và bắt đầu với template đầu tiên của bạn." },
  footer: { tagline: "Trợ lý dữ liệu agent-native cho Claude, Codex và OpenCode." },
};

export const messages: Record<LocaleCode, Messages> = { en, es, fr, de, ja, zh, vi };
