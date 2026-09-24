pipeline {
  agent any

  parameters {
    string(name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
    choice(name: 'CHOICE_VERSION', choices: ['1.1', '1.2'], description: 'version you can choose from')
    booleanParam(name: 'executeTests', defaultValue: true)
  }

  stages {
    stage("build") {
      steps {
          echo 'building application'
        }
    }
    stage("test") {
      when {
        expression {
          params.executeTests == true
        }
      }
      steps {
        echo 'testing application'
      }
    }
    stage("deploy") {
      steps {
        withCredentials([
          usernamePassword(
            credentials: '652a1c08-2c7a-4ddc-8c09-2f87682e8c70'
            usernameVariable: USER, 
            passwordVariable: PWD
          )
        ]){
          sh "some script ${USER} ${PWD}"
        }
        echo 'deploying application'
        echo 'deploying ${params.VERSION}, ${params.CHOICE_VERSION}'
      }
    }
  }

  post {
    always {
        // always execute after all stages are finished
        echo "always fire"
    }

    success {
      // if all stages are succeed
        echo "fire if success"
    }

    failure {
      // if some stages failed
      echo "fire if failed"
    }
  }
}
