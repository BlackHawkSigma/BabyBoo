import contraceptivePills from './contraceptive-pills.png'
import thermometer from './thermometer.png'
import feedingBottle from './feeding-bottle.png'
import breastFeeding from './breastfeeding.png'
import babyDiaper from './baby-diaper.png'
import babyBook from './baby-book.png'
import measurement from './measurement.png'

type IconProps = {
  inverted?: boolean
  size?: number
}

const defaultSize = 32

export const Meds = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={contraceptivePills}
    className={`${inverted ? 'invert' : null}`}
    alt="Meds"
    width={size}
    height={size}
  />
)

export const Temp = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={thermometer}
    className={`${inverted ? 'invert' : null}`}
    alt="Temp"
    width={size}
    height={size}
  />
)

export const Bottle = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={feedingBottle}
    className={`${inverted ? 'invert' : null}`}
    alt="Bottle"
    width={size}
    height={size}
  />
)

export const Breast = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={breastFeeding}
    className={`${inverted ? 'invert' : null}`}
    alt="Breast"
    width={size}
    height={size}
  />
)

export const Diaper = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={babyDiaper}
    className={`${inverted ? 'invert' : null}`}
    alt="Diaper"
    width={size}
    height={size}
  />
)

export const Book = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={babyBook}
    className={`${inverted ? 'invert' : null}`}
    alt="Book"
    width={size}
    height={size}
  />
)

export const Scale = ({ inverted = false, size = defaultSize }: IconProps) => (
  <img
    src={measurement}
    className={`${inverted ? 'invert' : null}`}
    alt="Scale"
    width={size}
    height={size}
  />
)
