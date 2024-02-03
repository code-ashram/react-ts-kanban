import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Skeleton } from '@nextui-org/react'
import { FC } from 'react'
import cn from 'classnames'

import styles from '../../App.module.scss'

const SkeletonCard: FC = () => (
  <li className={cn(styles.listItem)}>
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Skeleton>
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
        </Skeleton>
        <div className="flex flex-col">
          <Skeleton>
            <p className="text-md">NextUI</p>
          </Skeleton>
          <Skeleton>
            <p className="text-small text-default-500">nextui.org</p>
          </Skeleton>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Skeleton>
          <p>Make beautiful websites regardless of your design experience.</p>
        </Skeleton>
      </CardBody>
      <Divider />
      <CardFooter>
        <Skeleton>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Skeleton>
      </CardFooter>
    </Card>
  </li>

)

export default SkeletonCard
