from sightline.connectors.base import FrameworkAdapter
from sightline.connectors.django_adapter import DjangoAdapter
from sightline.connectors.frappe_adapter import FrappeAdapter

SUPPORTED_CONNECTORS = (
    "frappe",
    "django",
    "sql",
    "csv",
    "api",
)

ADAPTERS: tuple[FrameworkAdapter, ...] = (
    FrappeAdapter(),
    DjangoAdapter(),
)


def list_supported_connectors() -> list[str]:
    return list(SUPPORTED_CONNECTORS)


def list_framework_adapters() -> list[FrameworkAdapter]:
    return list(ADAPTERS)


def list_available_framework_adapters() -> list[FrameworkAdapter]:
    return [adapter for adapter in ADAPTERS if adapter.is_available()]
