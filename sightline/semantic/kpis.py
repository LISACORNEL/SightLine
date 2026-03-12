CORE_KPIS = [
    {"key": "revenue", "label": "Revenue"},
    {"key": "gross_margin", "label": "Gross Margin"},
    {"key": "cash_balance", "label": "Cash Balance"},
    {"key": "overdue_receivables", "label": "Overdue Receivables"},
]


def list_core_kpis() -> list[dict[str, str]]:
    return CORE_KPIS.copy()
