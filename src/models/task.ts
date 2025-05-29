export const TASKS_KEY = "tasks"

export interface TaskStatus {
 Creating: 'creating'
 Created: 'created'
}

export interface Task {
 id: string
 title: string
 concluded?: boolean
 state?: TaskStatus
}