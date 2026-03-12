from sightline.connectors.base import FrameworkAdapter, SourceScanSummary


class FrappeAdapter(FrameworkAdapter):
    key = "frappe"
    label = "Frappe"

    def is_available(self) -> bool:
        try:
            import frappe  # noqa: F401
            return True
        except Exception:
            return False

    def scan(self) -> SourceScanSummary:
        return SourceScanSummary(
            adapter_key=self.key,
            adapter_label=self.label,
            discovered_apps=[],
            discovered_models=[],
            discovered_domains=[],
            notes=["Frappe scan placeholder"],
        )

    def get_connection_mode(self) -> str:
        return "internal"
