def get_onboarding_steps() -> list[dict[str, str]]:
    return [
        {"key": "permissions", "label": "Approve data access"},
        {"key": "discovery", "label": "Scan available sources"},
        {"key": "spaces", "label": "Choose insight-space layout"},
        {"key": "recommendations", "label": "Review dashboard packs"},
    ]
