from sightline.utils.constants import API_PREFIX


def get_route_map() -> dict[str, str]:
    return {
        "health": f"{API_PREFIX}.api.health.get_health_status",
        "onboarding_summary": f"{API_PREFIX}.api.onboarding.get_onboarding_summary",
    }
