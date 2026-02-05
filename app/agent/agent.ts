// app/agent/agent.ts

import { AgentState } from "./agentState";
import { buildSiteModel } from "./siteBuilder";
import { SiteModel } from "@/lib/site-model";

export class Agent {
  private state: AgentState;

  constructor(initialSite: SiteModel) {
    this.state = new AgentState(initialSite);
  }

  getCurrentSite(): SiteModel {
    return this.state.getSite();
  }

  processUserIntent(
    intent: SiteModel,
    description: string = "User update"
  ): SiteModel {
    const completedSite = buildSiteModel(intent);
    this.state.updateSite(completedSite, description);
    return completedSite;
  }

  getHistory() {
    return this.state.getHistory();
  }
}
