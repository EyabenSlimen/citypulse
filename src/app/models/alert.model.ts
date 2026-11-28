export type AlertType = 'route' | 'travaux' | 'accident' | 'eau';
export type AlertSeverity = 'faible' | 'moyenne' | 'urgente';

export interface Alert {
  id: number;
  title: string;
  description: string;
  type: AlertType;
  location: string;
  severity: AlertSeverity;
  createdAt: string;
}
