// 公海池
import Mock from 'mockjs2'
import { builder, getQueryParameters} from '../util'

const totalCount = 14
const customerList = ( options )=>{
  const Random = Mock.Random
  const parameters = getQueryParameters(options)
  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1
  for (let i = 1; i < next; i++) {
    result.push({
      id: Mock.mock('@id'),
      customerCode: 'AX00100200'+ i,
      gender: '男',

      customerType: Mock.mock('@integer(1, 4)'),
      marketingType: Mock.mock('@integer(1, 3)'),
      expecteRenovationTime: Mock.mock('@datetime'),
      expecteManufacturingCost: '2000',
      expecteEstimateMoomTime: Mock.mock('@datetime'),
      updatedAt: Mock.mock('@datetime'),
      modifiedBy: Random.cname(),
      customerName: Random.cname(),
      resourceProvider: Random.cname(),
      salesman: Random.cname(),
      peceiptPerson: Random.cname(),
      modifiedTime: Mock.mock('@datetime'),
      status: Mock.mock('@integer(0, 2)'),
      practicalArea: 140,
      builtArea: 120,
      successRate: '50%',
      type: Random.boolean(),
      checked: Random.boolean(),
      disabled: Random.boolean(),
      types: Random.boolean(),
      firstVisitTime: Mock.mock('@datetime'),
      isFlyingOrder: Mock.mock('@integer(0, 1)'),
      isDropInCustomer: Mock.mock('@integer(0, 1)'),
      isElevator: Mock.mock('@integer(0, 1)'),
      isResourceCustomer: Mock.mock('@integer(0, 1)'),
      isFutureHouse: Mock.mock('@integer(0, 1)'),
      city: Random.city(),
      county: Random.county(),
      address: Random.city() + Random.county() ,
      idCard: Random.id(),

      boolean1: Random.boolean(),
      boolean2: Random.boolean(),
      boolean3: Random.boolean(),
      boolean4: Random.boolean(),
      boolean5: Random.boolean(),
      boolean6: Random.boolean(),
      boolean7: Random.boolean(),
      boolean8: Random.boolean(),
      boolean9: Random.boolean(),
      boolean10: Random.boolean(),
      boolean11: Random.boolean(),
      
      mobilePhone: '15600004442',
      mobilePhone1: '13600004442',
      mobilePhone2: '18600004442',
      mobilePhone3: '17600004442',
      mobilePhone4: '15600004442',

      number111: Mock.mock('@integer(1, 99)'),
      number1: Mock.mock('@integer(1, 99)'),
      number2: Mock.mock('@integer(1, 99)'),
      number3: Mock.mock('@integer(1, 99)'),
      number4: Mock.mock('@integer(1, 99)'),
      number5: Mock.mock('@integer(1, 99)'),
      number6: Mock.mock('@integer(1, 99)'),
      number7: Mock.mock('@integer(1, 99)'),
      number8: Mock.mock('@integer(1, 99)'),
      number9: Mock.mock('@integer(1, 99)'),
      number10: Mock.mock('@integer(1000000,10000000)'),
      number11: Mock.mock('@integer(1000000,10000000)'),
      number12: Mock.mock('@integer(1000000,10000000)'),
      number13: Mock.mock('@integer(1000000,10000000)'),
      number14: Mock.mock('@integer(1000000,10000000)'),
      number15: Mock.mock('@integer(1000000,10000000)'),
      number16: Mock.mock('@integer(1, 99)'),
      number17: Mock.mock('@integer(1, 99)'),
      number18: Mock.mock('@integer(1, 99)'),
      number19: Mock.mock('@integer(1, 99)'),
      number20: Mock.mock('@integer(1, 99)'),
      number21: Mock.mock('@integer(2000, 10000)'),
      number22: Mock.mock('@integer(2000, 10000)'),
      number23: Mock.mock('@integer(2000, 10000)'),
      number24: Mock.mock('@integer(2000, 10000)'),
      number25: Mock.mock('@integer(2000, 10000)'),
      number26: Mock.mock('@integer(2000, 10000)'),
      number27: Mock.mock('@integer(2000, 10000)'),


      name: Random.cname(),
      name1: Random.cname(),
      name2: Random.cname(),
      name3: Random.cname(),
      name4: Random.cname(),
      name5: Random.cname(),
      name6: Random.cname(),
      name7: Random.cname(),
      name8: Random.cname(),
      name9: Random.cname(),
      name10: Random.cname(),
      name11: Random.cname(),
      name12: Random.cname(),
      name13: Random.cname(),
      name14: Random.cname(),
      name15: Random.cname(),
      name16: Random.cname(),
      name17: Random.cname(),
      name18: Random.cname(),
      name19: Random.cname(),
      name20: Random.cname(),



      text: '测试数据',
      text1: '测试数据',
      text2: '测试数据',
      text3: '测试数据',
      text4: '状况可以',
      text5: '商贸业',
      text6: '状况可以',
      text7: '回单标志',
      text8: '状况可以',
      text9: '客群服务模式',
      text10: '客群张',
      text11: '地砖',
      text12: '10*100*200',
      text13: '供应商',
      text14: '优惠包',
      text15: '测试备注',
      text16: '主材',
      text17: '定金',


      status1: Mock.mock('@integer(0, 4)'),
      status2: Mock.mock('@integer(0, 4)'),
      status3: Mock.mock('@integer(0, 3)'),
      status4: Mock.mock('@integer(0, 1)'),
      status5: Mock.mock('@integer(0, 4)'),
      status6: Mock.mock('@integer(0, 4)'),
      status7: Mock.mock('@integer(0, 4)'),
      status8: Mock.mock('@integer(0, 4)'),

      type1: '正常',
      type2: '客户状态',
      type3: '客户来源类型',
      type4: '客户类型',
      type5: '别墅类型',
      type6: '别墅类型',
      type7: '部门类型',
      type8: '分总类型',
      type9: '测试类型',
      type10: '网销客服类型',
      type11: '门店名称',
      type12: '业务员部门',
      type13: '20到30岁',
      type14: '1000-2000',
      type15: '所属行业类型',
      type16: '回单部门类型',
      type17: '信息来源类型',
      type18: '了解公司类型',
      type19: '优惠活动',
      type20: '施工进度类型',
      type21: 'e签约状态',
      type22: '客餐厅',
      type23: '主材',
      type24: '平方米',


      code1: 'ADC-20330022',
      code2: 'BDC-20330022',
      code3: 'CDC-20330022',
      code4: 'FDC-20330022',
      code5: 'ASD-20330022',
      code6: 'QWER-20330022',
      code7: 'VUE',


      dataTime1: Mock.mock('@datetime'),
      dataTime2: Mock.mock('@datetime'),
      dataTime3: Mock.mock('@datetime'),
      dataTime4: Mock.mock('@datetime'),
      dataTime5: Mock.mock('@datetime'),
      dataTime6: Mock.mock('@datetime'),
      dataTime7: Mock.mock('@datetime'),
      dataTime8: Mock.mock('@datetime'),
      dataTime9: Mock.mock('@datetime'),
      dataTime10: Mock.mock('@datetime'),
      dataTime11: Mock.mock('@datetime'),
      dataTime12: Mock.mock('@datetime'),
      dataTime13: Mock.mock('@datetime'),

      address1: '繁华中心A',
      address2: '繁华中心S',
      address3: '繁华中心D',
      address4: '繁华中心F',
      address5: '繁华中心AB',

      email: Random.email()
    })
  }
  return builder({
    total: totalPage,
    rows: result
  },'',200)
}

Mock.mock(/\/intended\/list/, 'get', customerList)

