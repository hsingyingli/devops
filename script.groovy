def buildApp() {
    echo 'building application'
}

def testApp() {
    echo 'testing application'
}

def deployApp() {
    echo 'deploying application'
    echo "deploying ${params.VERSION}, ${params.CHOICE_VERSION}"
}

return this
