class Todo {
  constructor(title, description, isScheduled, scheduledTo) {
    this.title = title;
    this.description = description;
    this.isScheduled = !!isScheduled;
    this.scheduledTo = scheduledTo;
  }

  isValid() {
    return (
      this.title &&
      this.description &&
      (this.isScheduled ? this.scheduledTo : true)
    );
  }
}

class TodoResponse {
  constructor(
    completed,
    completed_at,
    created_at,
    description,
    id,
    scheduled,
    scheduled_to,
    title
  ) {
    this.completed = completed;
    this.completed_at = completed_at;
    this.created_at = created_at;
    this.description = description;
    this.id = id;
    this.scheduled = scheduled;
    this.scheduled_to = scheduled_to;
    this.title = title;
  }
}

export { Todo, TodoResponse };
