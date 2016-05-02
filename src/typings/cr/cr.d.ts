declare namespace CR {

  interface Info {
    title: string;
    description: string;
    completed: boolean;
  }

  interface Page extends Info {
    tasks?: Task[];
    onPageComplete?: string;
  }
  interface Task {
    description: string;
    tests?: string[];
    hints?: string[];
    actions?: string[];
    completed?: boolean;
  }

  interface State {
    dir: string;
    route: string;
    tutorialInfo: Tutorial.Info;
    pagePosition: PagePosition;
    package: PackageJson;
    page: Page;
    progress: Progress;
    tasks: Task[];
    taskTests: string[];
    taskPosition: number;
    hintPosition: number;
    editorActions: string[];
    alert: Alert;
    tutorial: Tutorial;
    tutorials: Tutorial.Info[];
    testRun: boolean;
    checks: Checks;
  }

  interface Tutorial {
    name: string;
    info: Tutorial.Info;
    pages: CR.Page[];
    packageJson: PackageJson;
    config: Tutorial.Config;
  }

  type PagePosition = number;

  interface Progress {
    completed: boolean;
    pages: boolean[];
  }

  type TaskTest = string[];

  interface Alert {
    message: string;
    action: string;
    open?: boolean;
    duration?: number;
  }

  interface Checks {
    passed?: boolean;
    system: {
      passed?: boolean;
      node: boolean;
      npm: boolean;
    };
    setup: {
      passed?: boolean;
      dir: boolean;
      packageJson: boolean;
      tutorial: boolean;
    };
  }

}
