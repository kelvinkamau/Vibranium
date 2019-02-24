workflow "New workflow" {
  on = "push"
  resolves = ["Assignee to reviewer"]
}

action "Assignee to reviewer" {
  uses = "pullreminders/assignee-to-reviewer-action@v1.0.4"
}
