//import React, { Component } from 'react';


//const queriesPlSql = `create or replace PACKAGE LDC_CARGUEINFOCONTRA IS
//  /*****************************************************************
//    Propiedad intelectual de OLSoftware (c).

//    Unidad         : PR_VALIDACAMPOS
//    Descripcion    : validar los campos  
//    Autor          : Josh Brito - OLSoftware

//    Historia de Modificaciones

//    Fecha             Autor             Modificacion
//    =========       =========           ====================
//    25/04/2020      JBRITO              Creacion.CASO 229
//    ******************************************************************/
//  PROCEDURE PR_VALIDACAMPOS (inuCausalProceso in number,
//                                  isbTipoCargue   in varchar2,
//                                  isbOrigenCargue in VARCHAR2,
//                                  isbDocSoporte   in VARCHAR2,
//                                  isbObsCargue in VARCHAR2,
//                                  inuContrato in number, 
//                                  onuErrorCode          out NUMBER,
//                                  osbErrorMessage       out VARCHAR2);
                           
//  /*****************************************************************
//    Propiedad intelectual de OLSoftware (c).

//    Unidad         : PR_VALIDA_CONTRATO 
//    Descripcion    : Valida contratos  
//    Autor          : Josh Brito - OLSoftware

//    Historia de Modificaciones

//    Fecha             Autor             Modificacion
//    =========       =========           ====================
//    25/04/2020      JBRITO              Creacion. CASO 229
//    ******************************************************************/
//  PROCEDURE PR_VALIDA_CONTRATO (inuContrato           in NUMBER,                              
//                                orCursorResult        OUT SYS_REFCURSOR,
//                                onuErrorCode          out NUMBER,
//                                osbErrorMessage       out VARCHAR2);
                                
//  /*****************************************************************
//    Propiedad intelectual de OLSoftware (c).

//    Unidad         : PR_PROCESAINFOCONTR 
//    Descripcion    : registrara la información del cargue    
//    Autor          : Josh Brito - OLSoftware

//    Historia de Modificaciones

//    Fecha             Autor             Modificacion
//    =========       =========           ====================
//    25/04/2020      JBRITO              Creacion. CASO 229
//    ******************************************************************/
//  PROCEDURE PR_PROCESAINFOCONTR (iseqCarguePro  in number,
//                                  inuCausalProceso in number,
//                                  isbTipoCargue   in varchar2,
//                                  isbOrigenCargue in VARCHAR2,
//                                  isbDocSoporte   in VARCHAR2,
//                                  isbObsCargue in VARCHAR2,
//                                  inuContrato in number,
//                                  isbDirReportada in VARCHAR2,
//                                  isbDirOsf in VARCHAR2,
//                                  inuSuscriptorId in number,
//                                  isbMotivoInclusion in VARCHAR2,
//                                  onuErrorCode out number);
  
//  PROCEDURE PR_REGLOG (iseqCarguePro  in number,
//                                  inuCountCarg in number,
//                                  inuCountPro in number,
//                                  inuCountNoPro in number);
                                  
//  PROCEDURE PR_LEER_ARCHIVO (orCursorResult        OUT SYS_REFCURSOR,
//                                    onuErrorCode          out NUMBER);                                 
                                  
//  PROCEDURE GETSEQ(inuSeqName in VARCHAR2, Seq OUT NUMBER);
//END LDC_CARGUEINFOCONTRA;
///

//create or replace PACKAGE BODY LDC_CARGUEINFOCONTRA IS

//  /*****************************************************************
//    Propiedad intelectual de OLSoftware (c).

//    Unidad         : PR_VALIDACAMPOS
//    Descripcion    : validar los campos  
//    Autor          : Josh Brito - OLSoftware

//    Historia de Modificaciones

//    Fecha             Autor             Modificacion
//    =========       =========           ====================
//    25/04/2020      JBRITO              Creacion.CASO 229
//    ******************************************************************/
//  PROCEDURE PR_VALIDACAMPOS(inuCausalProceso in number,
//                                  isbTipoCargue   in varchar2,
//                                  isbOrigenCargue in VARCHAR2,
//                                  isbDocSoporte   in VARCHAR2,
//                                  isbObsCargue in VARCHAR2,
//                                  inuContrato in number,
//                                  onuErrorCode          out NUMBER,
//                                  osbErrorMessage       out VARCHAR2) IS
    
//    begin
//      onuErrorCode := 0;
      
//      IF inuCausalProceso = 1 THEN
//        IF TRIM(inuContrato) IS NULL THEN osbErrorMessage := '[Contrato]'; onuErrorCode := 1; END IF;     
//        osbErrorMessage := 'Complete el parametro: ' || osbErrorMessage;
//      ELSE
        
//        IF isbTipoCargue IS NULL THEN osbErrorMessage := osbErrorMessage || '[Tipo de Cargue]'; onuErrorCode := 1; END IF;
//        IF isbOrigenCargue IS NULL THEN osbErrorMessage := osbErrorMessage || '[Origen del Cargue]'; onuErrorCode := 1; END IF;
//        IF isbDocSoporte IS NULL THEN osbErrorMessage := osbErrorMessage || '[Documento Soporte]'; onuErrorCode := 1; END IF;
//        IF TRIM(isbObsCargue) IS NULL THEN osbErrorMessage := osbErrorMessage || '[Observación del cargue]'; onuErrorCode := 1; END IF;
//        osbErrorMessage := 'Complete los parametros: ' || osbErrorMessage;
//      END IF;
            
//    EXCEPTION
//    WHEN ex.CONTROLLED_ERROR then onuErrorCode := -1;
//      WHEN OTHERS THEN
//        osbErrorMessage:= 'Error Durante la validacion de los parametros ';
//        onuErrorCode := -1; 
//        RAISE ex.CONTROLLED_ERROR;
//  END PR_VALIDACAMPOS;
  
//  /*****************************************************************
//    Propiedad intelectual de OLSoftware (c).

//    Unidad         : PR_VALIDA_CONTRATO 
//    Descripcion    : Valida contratos  
//    Autor          : Josh Brito - OLSoftware

//    Historia de Modificaciones

//    Fecha             Autor             Modificacion
//    =========       =========           ====================
//    25/04/2020      JBRITO              Creacion. CASO 229
//    ******************************************************************/        
//    PROCEDURE PR_VALIDA_CONTRATO  (inuContrato           in NUMBER,                              
//                                    orCursorResult        OUT SYS_REFCURSOR,
//                                    onuErrorCode          out NUMBER,
//                                    osbErrorMessage       out VARCHAR2) IS

//    BEGIN        
         
//        onuErrorCode := 0;
      
//        OPEN orCursorResult for 
//            SELECT SUSCCODI CONTRATO,
//            DECODE(SUSCIDDI,NULL,null,DAAB_ADDRESS.FSBGETADDRESS(SUSCIDDI)) DIRECCION_PREDIO,
//            DECODE(SUSCCLIE,NULL,0,SUSCCLIE) SUSCRIPTOR_ID, 
//            DECODE(SUSCCLIE,NULL,null,DAGE_SUBSCRIBER.FSBGETSUBSCRIBER_NAME(SUSCCLIE) ||' '||DAGE_SUBSCRIBER.FSBGETSUBS_LAST_NAME(SUSCCLIE)) NOMBRE_SUSCRIPTOR 
//            FROM SUSCRIPC WHERE SUSCCODI = inuContrato; --6212990
           


//    EXCEPTION
//        WHEN ex.CONTROLLED_ERROR THEN
//            RAISE ex.CONTROLLED_ERROR;
//        WHEN OTHERS THEN
//            Errors.setError;
//            RAISE ex.CONTROLLED_ERROR;
//    END PR_VALIDA_CONTRATO ;
    
//    /*****************************************************************
//    Propiedad intelectual de OLSoftware (c).

//    Unidad         : PR_PROCESAINFOCONTR 
//    Descripcion    : registrara la información del cargue    
//    Autor          : Josh Brito - OLSoftware

//    Historia de Modificaciones

//    Fecha             Autor             Modificacion
//    =========       =========           ====================
//    25/04/2020      JBRITO              Creacion. CASO 229
//    ******************************************************************/
//  PROCEDURE PR_PROCESAINFOCONTR (iseqCarguePro  in number,
//                                  inuCausalProceso in number,
//                                  isbTipoCargue   in varchar2,
//                                  isbOrigenCargue in VARCHAR2,
//                                  isbDocSoporte   in VARCHAR2,
//                                  isbObsCargue in VARCHAR2,
//                                  inuContrato in number,
//                                  isbDirReportada in VARCHAR2,
//                                  isbDirOsf in VARCHAR2,
//                                  inuSuscriptorId in number,
//                                  isbMotivoInclusion in VARCHAR2,
//                                  onuErrorCode out number) is
                          
//  BEGIN    

 
//      begin
//       INSERT INTO LDC_PROCESACONTRATOS(ID_PROCESACONTRATOS
//                  ,ID_CARGUE
//                  ,CAUSAL_PROCESO
//                  ,TIPO_CARGUE
//                  ,ORIGEN_CARGUE
//                  ,DOC_SOPORTE
//                  ,OBSERVACION_CARGUE
//                  ,ID_CONTRATO
//                  ,DIR_REPORTADA
//                  ,DIRECCION_OSF
//                  ,ID_SUSCRIPTOR
//                  ,MOTIVO_INCLUSION) 
//                  VALUES (SEQ_LDC_PROCESACONTRATOS.nextval
//                  ,iseqCarguePro
//                  ,inuCausalProceso
//                  ,isbTipoCargue
//                  ,isbOrigenCargue
//                  ,isbDocSoporte
//                  ,isbObsCargue
//                  ,inuContrato
//                  ,isbDirReportada
//                  ,isbDirOsf
//                  ,inuSuscriptorId
//                  ,isbMotivoInclusion);
//                  commit;
//       exception 
//        when others then
//          onuErrorCode := 0;
//       end;           
        
//      /*  INSERT INTO LDC_LOGCARGUEINFO (ID_CARGUE
//                    ,FECHA_CARGUE
//                    ,ID_USUARIO
//                    ,REG_CARGADOS
//                    ,REG_PROCESADOS
//                    ,REG_NO_PROCESADOS)
//                    VALUES (iseqCarguePro
//                    ,sysdate
//                    ,user
//                    ,0
//                    ,0
//                    ,0);*/
                  
                  
//          --COMMIT;
//          onuErrorCode := 1;

//    EXCEPTION
//        WHEN ex.CONTROLLED_ERROR THEN
//            onuErrorCode := -1;
//            RAISE ex.CONTROLLED_ERROR;
//        WHEN OTHERS THEN
//            onuErrorCode := -1;
//            Errors.setError;
//            RAISE ex.CONTROLLED_ERROR;
//    END PR_PROCESAINFOCONTR;
  
//  PROCEDURE PR_REGLOG (iseqCarguePro  in number,
//                                  inuCountCarg in number,
//                                  inuCountPro in number,
//                                  inuCountNoPro in number) is
//   begin                               
//    INSERT INTO LDC_LOGCARGUEINFO (ID_CARGUE
//                    ,FECHA_CARGUE
//                    ,USUARIO
//                    ,REG_CARGADOS
//                    ,REG_PROCESADOS
//                    ,REG_NO_PROCESADOS)
//                    VALUES (iseqCarguePro
//                    ,sysdate
//                    ,user
//                    ,inuCountCarg
//                    ,inuCountPro
//                    ,inuCountNoPro);  
                    
//    commit;
                                  
//  end;
  
//  PROCEDURE PR_LEER_ARCHIVO ( orCursorResult        OUT SYS_REFCURSOR,
//                                    onuErrorCode          out NUMBER)
//                                  is
//   begin                               
                   
//    open orCursorResult for
//      SELECT LDC_TEMPOCONTRATOS.ID_CONTRATO CONTRATO,
//            LDC_TEMPOCONTRATOS.DIR_REPORTADA,
//            DECODE(SUSCIDDI,NULL,'NO existe contrato',DAAB_ADDRESS.FSBGETADDRESS(SUSCIDDI)) DIRECCION_PREDIO,
//            DECODE(SUSCCLIE,NULL,0,SUSCCLIE) SUSCRIPTOR_ID, 
//            DECODE(SUSCCLIE,NULL,'NO existe contrato',DAGE_SUBSCRIBER.FSBGETSUBSCRIBER_NAME(SUSCCLIE) ||' '||DAGE_SUBSCRIBER.FSBGETSUBS_LAST_NAME(SUSCCLIE)) NOMBRE_SUSCRIPTOR
//            FROM SUSCRIPC, LDC_TEMPOCONTRATOS 
//            WHERE LDC_TEMPOCONTRATOS.ID_CONTRATO = SUSCCODI(+);
      
//      onuErrorCode := 0;              
//    --commit;
//    EXCEPTION
//    WHEN ex.CONTROLLED_ERROR then onuErrorCode := -1;
//      WHEN OTHERS THEN
//        onuErrorCode := -1; 
//        RAISE ex.CONTROLLED_ERROR;                               
//  end;
    
//  PROCEDURE GETSEQ(inuSeqName in VARCHAR2, Seq OUT NUMBER) IS  
//  BEGIN
//    EXECUTE IMMEDIATE 'SELECT '||inuSeqName||'.NEXTVAL FROM DUAL ' into SEQ;
//  END GETSEQ;
  
    
//END LDC_CARGUEINFOCONTRA;
///

//grant execute on LDC_CARGUEINFOCONTRA to SYSTEM_OBJ_PRIVS_ROLE;
//grant execute on LDC_CARGUEINFOCONTRA to uselopen;
///`;




//function getCoding(name: string) {

//    //switch (name) {
//    //    case 'Pl':
//    //        return queriesPlSql;
//    //    case 'OTRO':
//    //        return queriesPlSql;
//    //    default:
//    //        console.error(`Function ${name} not found.`);
//    //}

   
//}




//export default function getCoding;    