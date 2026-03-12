from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field


@dataclass
class SourceScanSummary:
    adapter_key: str
    adapter_label: str
    discovered_apps: list[str] = field(default_factory=list)
    discovered_models: list[str] = field(default_factory=list)
    discovered_domains: list[str] = field(default_factory=list)
    notes: list[str] = field(default_factory=list)


class FrameworkAdapter(ABC):
    key: str
    label: str

    @abstractmethod
    def is_available(self) -> bool:
        """Return True when the target framework is installed and importable."""

    @abstractmethod
    def scan(self) -> SourceScanSummary:
        """Return a normalized discovery summary for onboarding."""

    @abstractmethod
    def get_connection_mode(self) -> str:
        """Return the integration mode, for example internal or external."""
