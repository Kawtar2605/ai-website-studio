// app/agent/agentState.ts

import { SiteModel } from "@/lib/site-model";

export type AgentStep = {
  timestamp: number;
  description: string;
  site: SiteModel;
};

export class AgentState {
  private current: SiteModel;
  private history: AgentStep[] = [];

  constructor(initialSite: SiteModel) {
    this.current = initialSite;
    this.save("Initial site generated");
  }

  getSite(): SiteModel {
    return this.current;
  }

  updateSite(newSite: SiteModel, description: string) {
    this.current = newSite;
    this.save(description);
  }

  getHistory(): AgentStep[] {
    return this.history;
  }

  private save(description: string) {
    this.history.push({
      timestamp: Date.now(),
      description,
      site: JSON.parse(JSON.stringify(this.current)),
    });
  }
}
