const fs = require("fs");
const file = "/Users/mac/dev/mochi-landing/src/components/Features.tsx";
let content = fs.readFileSync(file, "utf8").split("\n");

// Delete lines 63 to 121 (0-indexed 62 to 120)
content.splice(62, 121 - 63 + 1);

const newCode = `// --- Branch A: Minh (Sales team) ---
const BRANCH_A: Line[] = [
  { who: "you", text: "checkout branch feature/add-minh" },
  { who: "mochi", text: "✓ đang ở branch feature/add-minh" },
  { who: "you", text: "thêm khách Minh, zalo 0912345678, Q1 HCM, nguồn zalo" },
  { who: "mochi", text: "tạo hồ sơ #M-201: Minh · 0912345678 · Q1 ✓" },
  { who: "you", text: "commit thay đổi này" },
  { who: "mochi", text: \`commit: feat(crm): add customer Minh\\n  + id: "M-201"\\n  + phone: "0912345678"\\n  + source: "zalo"\`, process: true, id: "commit-minh" },
  { who: "you", text: "push lên remote" },
  { who: "mochi", text: "pushed feature/add-minh → origin 🚀", id: "push-minh" },
];

// --- Branch B: Thu (Marketing team) ---
const BRANCH_B: Line[] = [
  { who: "you", text: "checkout branch feature/add-thu" },
  { who: "mochi", text: "✓ đang ở branch feature/add-thu" },
  { who: "you", text: "thêm khách Thu, fb 0978654321, Q3, nguồn facebook" },
  { who: "mochi", text: "tạo hồ sơ #T-088: Thu · 0978654321 · Q3 ✓" },
  { who: "you", text: "commit thay đổi này" },
  { who: "mochi", text: \`commit: feat(crm): add customer Thu\\n  + id: "T-088"\\n  + phone: "0978654321"\\n  + source: "facebook"\`, process: true, id: "commit-thu" },
  { who: "you", text: "revert commit vừa rồi" },
  { who: "mochi", text: "đã revert commit và khôi phục dữ liệu 🔙", id: "revert-thu" },
];

type DBRow = { id: string; name: string; phone: string; source: string; status: "staged" | "pushed" | "merged" | "reverted" };

function RealtimeDB() {
  const [rows, setRows] = useState<DBRow[]>([]);

  useEffect(() => {
    const handleReset = () => setRows([]);
    const handleA = (e: any) => {
      if (e.detail === "commit-minh") setRows(r => r.find(x => x.id === "M-201") ? r : [...r, { id: "M-201", name: "Minh", phone: "0912345678", source: "zalo", status: "staged" }]);
      if (e.detail === "push-minh") setRows(r => r.map(x => x.id === "M-201" ? { ...x, status: "pushed" } : x));
    };
    const handleB = (e: any) => {
      if (e.detail === "commit-thu") setRows(r => r.find(x => x.id === "T-088") ? r : [...r, { id: "T-088", name: "Thu", phone: "0978654321", source: "facebook", status: "staged" }]);
      if (e.detail === "revert-thu") setRows(r => r.map(x => x.id === "T-088" ? { ...x, status: "reverted" } : x));
    };
    window.addEventListener("mochi-reset-branch-a", handleReset);
    window.addEventListener("mochi-reset-branch-b", handleReset);
    window.addEventListener("mochi-action-branch-a", handleA);
    window.addEventListener("mochi-action-branch-b", handleB);
    return () => {
      window.removeEventListener("mochi-reset-branch-a", handleReset);
      window.removeEventListener("mochi-reset-branch-b", handleReset);
      window.removeEventListener("mochi-action-branch-a", handleA);
      window.removeEventListener("mochi-action-branch-b", handleB);
    };
  }, []);`;

content.splice(62, 0, newCode);
fs.writeFileSync(file, content.join("\n"));
console.log("Done");
