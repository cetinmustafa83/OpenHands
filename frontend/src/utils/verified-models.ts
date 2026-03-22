// Here are the list of verified models and providers that we know work well with OpenHands.
export const VERIFIED_PROVIDERS = ["anthropic", "openai", "github"];
export const VERIFIED_MODELS = [
  // Anthropic
  "claude-opus-4-6",
  "claude-opus-4-5-20251101",
  "claude-sonnet-4-6",
  "claude-sonnet-4-5-20250929",
  // OpenAI
  "gpt-5.2-codex",
  "gpt-5.2",
  // GitHub Copilot
  "gpt-4.1",
  "gpt-5-mini",
  "gpt-5.1",
  "gpt-5.1-codex",
  "gpt-5.1-codex-mini",
  "gpt-5.1-codex-max",
  "gpt-5.3-codex",
  "gpt-5.4",
  "gpt-5.4-mini",
  "claude-haiku-4-5",
  "claude-opus-4-5",
  "claude-opus-4-6-fast",
  "claude-sonnet-4",
  "claude-sonnet-4-5",
  "gemini-2.5-pro",
  "gemini-3-flash",
  "gemini-3-pro",
  "gemini-3.1-pro",
  "grok-code-fast-1",
  "raptor-mini",
  "goldeneye",
];

// LiteLLM does not return OpenAI models with the provider, so we list them here to set them ourselves for consistency
// (e.g., they return `gpt-4o` instead of `openai/gpt-4o`)
export const VERIFIED_OPENAI_MODELS = [
  "gpt-5.2",
  "gpt-5.2-codex",
  "gpt-4o",
  "gpt-4o-mini",
];

// LiteLLM does not return the compatible Anthropic models with the provider, so we list them here to set them ourselves
// (e.g., they return `claude-3-5-sonnet-20241022` instead of `anthropic/claude-3-5-sonnet-20241022`)
export const VERIFIED_ANTHROPIC_MODELS = [
  "claude-opus-4-6",
  "claude-opus-4-5-20251101",
  "claude-sonnet-4-5-20250929",
  "claude-3-5-sonnet-20240620",
  "claude-3-5-sonnet-20241022",
  "claude-3-7-sonnet-20250219",
  "claude-sonnet-4-20250514",
  "claude-opus-4-20250514",
  "claude-opus-4-1-20250805",
];

// GitHub Copilot models (without github/ prefix)
export const VERIFIED_GITHUB_MODELS = [
  "gpt-4.1",
  "gpt-5-mini",
  "gpt-5.1",
  "gpt-5.1-codex",
  "gpt-5.1-codex-mini",
  "gpt-5.1-codex-max",
  "gpt-5.2",
  "gpt-5.2-codex",
  "gpt-5.3-codex",
  "gpt-5.4",
  "gpt-5.4-mini",
  "claude-haiku-4-5",
  "claude-opus-4-5",
  "claude-opus-4-6",
  "claude-opus-4-6-fast",
  "claude-sonnet-4",
  "claude-sonnet-4-5",
  "claude-sonnet-4-6",
  "gemini-2.5-pro",
  "gemini-3-flash",
  "gemini-3-pro",
  "gemini-3.1-pro",
  "grok-code-fast-1",
  "raptor-mini",
  "goldeneye",
];

// Default model
export const DEFAULT_MODEL = "anthropic/claude-opus-4-5-20251101";
