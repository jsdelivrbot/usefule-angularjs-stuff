var result = breeze
    .EntityQuery
    .from('CertificateHeaders')
    .where('calibrationHeaderId', '==', calibrationHeader.id)
    .using(manager)
    .executeLocally();