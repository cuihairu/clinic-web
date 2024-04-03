// @ts-ignore
/* eslint-disable */

declare namespace API {

  type QueryCustomerParams = {
    pageSize?: number;
    current?: number;
    keyword?: string;
    name?: string;
    phone?: string;
    startTime?: string;
    endTime?: string;
  }
  type QueryItemParams = {
    pageSize?: number;
    current?: number;
    keyword?: string;
    name?: string;
    price?: string;
    startTime?: string;
    endTime?: string;
  }

  type MessageResp = {
    message: string;
  }

  type QueryCustomerResult = {
    total?: number;
    pages?: number;
    data?: Customer[];
  }

  type Customer = {
    name?: string;
    age?: number;
    gender?: number;
    phone?: string;
    address?: string;
    level?: number;
    birthday?: string;
    id?: number;
  };
  type Staff = {
    account?: string;
    name?: string;
    password?: string;
    phone?: string;
    address?: string;
    age?: number;
    gender?: number;
    role?: number;
    birthday?: string;
    createTime?: string;
    updateTime?: string;
    id?: number;
  };
  type QueryStaffParams = {
    pageSize?: number;
    current?: number;
    keyword?: string;
    name?: string;
    phone?: string;
    startTime?: string;
    endTime?: string;
  }
  type QueryStaffResult = {
    total?: number;
    pages?: number;
    data?: Staff[];
  }
  type Sign = {
    signType: number;
  };

  type SignResult = {
    staffId?: number;
    name?: string;
    signType?: number;
    signTime?: string;
  }

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    token?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
  type Treat = {
    id?: number;
    phone?: string;
    customerId?: number;
    name?: string;
    gender?: number;
    age?: number;
    createTime?: string;
    updateTime?: string;
    desc?: string;
    inquiry?: string;
    observation?: string;
    palpation?: string;
    pulse?: string;
    pulseLeft?: string;
    pulseRight?: string;
    pulseInfo?: string;
    fiveBenZiLeft?: string;
    fiveZiBenLeft?: string;
    fiveBenZiRight?: string;
    fiveZiBenRight?: string;
    fiveBenKeLeft?: string;
    fiveKeBenLeft?: string;
    fiveBenKeRight?: string;
    fiveKeBenRight?: string;
    fiveNanJinLeft?: string;
    fiveNanJinBigLeft?: string;
    fiveNanJinSmallLeft?: string;
    fiveNanJinRight?: string;
    fiveNanJinBigRight?: string;
    fiveNanJinSmallRight?: string;
    fiveRateLeft?: string;
    fiveRateRight?: string;
    fiveAuxLeft?: string;
    fiveAuxRight?: string;
    acupointLeft?: string;
    acupointRight?: string;
    diagnose?: string;
    plan?: string;
    diet?: string;
    conditioning?: string;
    review?: string;
  };
  type Item = {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    createTime?: string;
    updateTime?: string;
  };
  type QueryItemParams = {
    pageSize?: number;
    current?: number;
    keyword?: string;
    name?: string;
    startTime?: string;
    endTime?: string;
  }
  type QueryItemResult = {
    total?: number;
    pages?: number;
    data?: Item[];
  }
  type Leave = {
    account?: string;
    name?: string;
    reason?: string;
    gender?: number;
    startTime?: string;
    endTime?: string;
    createTime?: string;
    updateTime?: string;
    id?: number;
  };

  type Timesheet ={
      name?: string;
      signType?: number;
      time?: string;
  };
  type StaffTimesheet = {
    staffId?: number;
    name?: string;
    total?: number;
    data?: DayTimesheet[];
  }
  type DayTimesheet = {
    day?: number;
    total?: number;
    startTime?: string;
    endTime?: string;
    data?: Timesheet[];
  }
  type MonthTimesheet = {
    month?: number;
    data?:StaffTimesheet[];
  }
  type Review = {
    id?: number;
    day?: Date;
    good?: string;
    improvement?:string;
    createTime?: string;
    updateTime?: string;

  };
  type ReviewStaff = {
    id: number|string;
    name?: string;
    cost?: number;
    done?: string;
    staffId?: number;
    day?: Date;
    advice?: string;
    createTime?: string;
    updateTime?: string;

  };
  type ReviewCustomer = {
    id: number|string;
    name?: string;
    last?: Date;
    done?: string;
    customerId?: number;
    day?: Date;
    advice?: string;
    createTime?: string;
    updateTime?: string;
  };
  type QueryTreatParams = {
    pageSize?: number;
    current?: number;
    keyword?: string;
    customerId?: number;
    startTime?: string;
    endTime?: string;
  }
  type QueryTreatResult = {
    total?: number;
    pages?: number;
    data?: Treat[];
  }
}
