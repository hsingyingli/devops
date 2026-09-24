pipeline {
  agent any

  parameters {
    string(name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
    choice(name: 'CHOICE_VERSION', choices: ['1.1', '1.2'], description: 'version you can choose from')
    booleanParam(name: 'executeTests', defaultValue: true)
  }

  stages {
    stage("init") {
      steps {
        script {
            gv = load "script.groovy"
        }
      }
    }
    stage("build") {
      steps {
        script {
            gv.buildApp()
          }
        }
    }
    stage("test") {
      when {
        expression {
          params.executeTests == true
        }
      }
      steps {
        script {
          gv.testApp()
        }
      }
    }
    stage("deploy") {
      steps {
        withCredentials([
          usernamePassword(
            credentialsId: '652a1c08-2c7a-4ddc-8c09-2f87682e8c70',
            usernameVariable: 'DEPLOY_USER',
            passwordVariable: 'DEPLOY_PWD'
          )
        ]){
          echo 'some script ${DEPLOY_USER} ${DEPLOY_PWD}'
        }
        script {
          gv.deployApp()
        }
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
