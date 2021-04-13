import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Star from '../../components/Star'

configure({ adapter: new Adapter() })

describe("<Star /> UI Component", () => {
  it("renders default star", () => expect(shallow(<Star />).find('div.star').length).toBe(1))
  it("renders selected star", () => expect(shallow(<Star selected={true} />).find('div.selected.star').length).toBe(1))
  it("invokes onClick", () => {
    const _click = jest.fn()
    shallow(<Star onClick={_click} />).find('div.star').simulate('click')
    expect(_click).toBeCalled()
  })
})