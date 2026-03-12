from sightline.connectors.registry import list_supported_connectors
from sightline.dashboard_packs.recommender import get_default_dashboard_packs
from sightline.onboarding.service import get_onboarding_steps
from sightline.semantic.kpis import list_core_kpis


def get_onboarding_summary() -> dict:
    return {
        "supported_connectors": list_supported_connectors(),
        "steps": get_onboarding_steps(),
        "default_dashboard_packs": get_default_dashboard_packs(),
        "core_kpis": list_core_kpis(),
    }
